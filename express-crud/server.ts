import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

function idCheck(id: string): void {
  if (!Number.isInteger(+id)) {
    throw new ClientError(400, `gradeId must be an integer`);
  }
}

function propCheck(prop: string | number, message: string): void {
  if (!prop) throw new ClientError(400, `${message} is required`);
}

function resultCheck(resultRows: Record<string, any>[], message: string): void {
  if (!resultRows[0]) {
    throw new ClientError(404, `${message} not found`);
  }
}

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `select * from "grades";`;
    const result = await db.query(sql);
    const grades = result.rows;
    resultCheck(grades, 'grades');
    res.json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    idCheck(gradeId);
    const sql = `
                select * from "grades"
                where "gradeId" = $1;
                `;
    const result = await db.query(sql, [gradeId]);
    const grade = result.rows[0];
    resultCheck(result.rows, `student with gradeId ${gradeId}`);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    propCheck(name, 'name');
    propCheck(course, 'course');
    propCheck(score, 'score');
    if (!Number.isInteger(score) || score < 0 || score > 100) {
      throw new ClientError(400, 'score must be an integer between 0 and 100');
    }
    const sql = `
                insert into "grades" ("name", "course", "score")
                values ($1, $2, $3)
                returning *;
                `;
    const result = await db.query(sql, [name, course, score]);
    const grade = result.rows[0];
    resultCheck(result.rows, 'grade');
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    idCheck(gradeId);
    const { name, course, score } = req.body;
    propCheck(name, 'name');
    propCheck(course, 'course');
    propCheck(score, 'score');
    if (!Number.isInteger(score) || score < 0 || score > 100) {
      throw new ClientError(400, 'score must be an integer between 0 and 100');
    }
    const sql = `
                update "grades"
                set "name" = $1, "course" = $2, "score" = $3
                where "gradeId" = $4
                returning *;
                `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    resultCheck(result.rows, `student with gradeId ${gradeId}`);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    idCheck(gradeId);
    const sql = `delete from "grades"
                where "gradeId" = $1
                returning *;
                `;
    const result = await db.query(sql, [gradeId]);
    resultCheck(result.rows, `student with gradeId ${gradeId}`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
