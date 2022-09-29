const express = require('express');
const { function1
} = require('../controllers/payment.controller');

const paymentRouter = express.Router();
paymentRouter.post('', function1);

module.exports = paymentRouter;