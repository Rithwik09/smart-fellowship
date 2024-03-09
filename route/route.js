const router = require('express').Router();
const { contactController , applicationController }  = require('../Controller/appController.js');


router.post('/application', applicationController)
router.post('/contact', contactController)

module.exports = router;