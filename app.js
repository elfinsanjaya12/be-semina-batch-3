const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const authCMSRouter = require('./app/api/v1/auth/router');
const categoriesRouter = require('./app/api/v1/categories/router');
const talentsRouter = require('./app/api/v1/talents/router');
const imagesRouter = require('./app/api/v1/images/router');
const eventsRouter = require('./app/api/v1/events/router');
const organizersRouter = require('./app/api/v1/organizers/router');
const userRefreshTokenRouter = require('./app/api/v1/userRefreshToken/router');
const paymentsRouter = require('./app/api/v1/payments/router');
const ordersRouter = require('./app/api/v1/orders/router');
const participantsRouter = require('./app/api/v1/participants/router');
const urlV1 = '/api/v1/cms';

const notFoundMiddleware = require('./app/middlewares/not-found');
const handleErrorMiddleware = require('./app/middlewares/handler-error');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`${urlV1}/categories`, categoriesRouter);
app.use(`${urlV1}/talents`, talentsRouter);
app.use(`${urlV1}/images`, imagesRouter);
app.use(`${urlV1}/events`, eventsRouter);
app.use(`${urlV1}/organizers`, organizersRouter);
app.use(`${urlV1}/auth`, authCMSRouter);
app.use(`${urlV1}/refresh-token`, userRefreshTokenRouter);
app.use(`${urlV1}/payments`, paymentsRouter);
app.use(`${urlV1}/orders`, ordersRouter);
app.use(`/api/v1`, participantsRouter);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
