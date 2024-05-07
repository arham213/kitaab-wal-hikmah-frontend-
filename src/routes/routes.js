const express=require('express');
const router=express.Router();

const boardModel = require('../models/book/book');

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await boardModel.find({});
        console.log(data); // Log the data before sending the response
        res.json(data);
    } catch (error) { // Added 'error' parameter to catch block
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;