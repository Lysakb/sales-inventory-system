const express = require('express');
require('express-async-errors');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const paymentRoute = require('../routes/paystack.route');


const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(cookieParser());
app.use(helmet());
app.use(limiter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use('/paystack', paymentRoute);
//default route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Payment service',
  });
});

module.exports = app;
