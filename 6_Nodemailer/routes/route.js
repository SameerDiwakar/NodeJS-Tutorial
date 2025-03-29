const router = require('express').Router();
const { nodemailerTest, nodemailerGmail, brevoAPI } = require('../controller/appController'); 

router.post('/nodemailerTest', nodemailerTest); 

router.post('/nodemailerGmail', nodemailerGmail); 
router.post('/brevoAPI', brevoAPI); 

module.exports = router;