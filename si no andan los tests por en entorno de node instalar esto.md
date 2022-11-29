`npm install`  cross-env

`package.json deberia verse asi` =
  "scripts": {
    "test": "cross-env NODE_ENV=test jest --verbose --watch",
    "dev": "cross-env NODE_ENV=development nodemon -L",
    "start": "cross-env NODE_ENV=production node index.js"
  },