const express = require('express');
const {Careers} = require('../model/model');
const router = express.Router()
const cors = require('cors');


//validation






//Check
router.get('/', (req, res) => {
    res.send("Working")
})


//CareersAPI



module.exports = router;