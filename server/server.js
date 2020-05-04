const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const CustomRouter = require('./routes');

const app = express();
app.use(
  bodyParser.json({
    inflate: true,
    limit: '100kb',
    reviver: null,
    strict: true,
    type: 'application/json',
    verify: undefined
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

const {
  REACT_APP_DB_HOST,
  REACT_APP_DB_USER,
  REACT_APP_DB_PASSWORD,
  REACT_APP_DB_NAME,
  REACT_APP_DB_PORT
} = process.env;

// middleware start

app.use(function(req, res, next) {
  console.log('Time:', Date.now());
  next();
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(function(err, req, res, next) {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.status(500).send('Something broke!');
  next();
});
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  next();
});
// middleware end

app.listen(REACT_APP_DB_PORT, () => {
  console.log(`node ${REACT_APP_DB_HOST} server started at ${REACT_APP_DB_PORT}`);
});
app.use('/api', CustomRouter);
