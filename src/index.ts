import express from 'express';

import config from './config';

const app = express();

import indexRouter from './routes';

app.use('/', indexRouter);

app.listen(config.port, () => {
  console.log(`Application is running on port ${config.port}.`);
});