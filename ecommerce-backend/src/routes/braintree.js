const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/AuthController");
const { userById } = require("../controllers/UserController");
const { generateToken, processPayment } = require("../controllers/BraintreeController")

router.get('/braintree/getToken/:userId', requireSignin, isAuth, generateToken);
router.post('/braintree/payment/:userId', requireSignin, isAuth, processPayment);

router.param('userId', userById)


module.exports = router