# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  Node package manager. It is a software registry that open source developers use to share and borrow packages.

- What is a package?
  A package is a directory with one or more files in it that also has a file called package.json with some metadata about this package.

- What are some other popular package managers?
  Yarn and PNPM

- How can you create a `package.json` with `npm`?
  npm init --yes

- What is a dependency and how do you add one to a package?
  Packages required by the application in production. They are added with: npm install <package-name>

- What happens when you add a dependency to a package with `npm`?
  When you add a dependency with npm, it is installed in the node_modules directory and added to the dependencies object in the package.json file and also updates the package-lock.json as well.

- What is a devDependency and how do you add one to a package?
  These are packages needed during development but not in production (e.g., linters, testing tools). They are added with: npm install <package-name> --save-dev

- How do you define and run `npm` scripts? Why are these useful?
  You define npm scripts in the scripts section of package.json as key-value pairs (e.g., "scripts": {"hello": "echo Hello, LearningFuze"}), and run them with npm run <script-name>. They simplify workflows by automating repetitive tasks and ensuring consistency across the team.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
