const router = require('express').Router();
const { signup, getBill } = require('../controller/appController'); // Import the functions

router.post('/user/signup', signup); // Use the signup function as the route handler

router.post('/product/getBill', getBill); // Use the getBill function as the route handler

module.exports = router;