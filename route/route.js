const router = require('express').Router();
const { formfilled }  = require('../Controller/appController.js');


router.post('/form/formfilled', formfilled)

module.exports = router;