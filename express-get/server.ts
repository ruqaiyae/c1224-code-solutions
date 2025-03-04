import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});
const app = express();

app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `
                select count(*) as "cities", "countryId", "c"."name"
                from "countries" as "c"
                join "cities" using ("countryId")
                group by "countryId";
                `;
    const result = await db.query(sql);
    const list = result.rows;
    res.json(list);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    if (cityId === undefined) {
      throw new ClientError(400, 'cityId is required');
    }
    if (!Number.isInteger(+cityId)) {
      throw new ClientError(400, 'cityId must be an integer');
    }
    const sql = `
                select "c"."cityId", "co"."name" as "country", "c"."name"
                from "cities" as "c"
                join "countries" as "co" using ("countryId")
                where "c"."cityId" = $1;
                `;
    const params = [cityId];
    const result = await db.query(sql, params);
    const city = result.rows[0];
    if (!city) {
      throw new ClientError(404, `city ${cityId} not found`);
    }
    res.json(city);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
