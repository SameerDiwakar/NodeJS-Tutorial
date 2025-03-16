const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb) => {
      const suffix = Date.now();
      cb(null,suffix+'-'+ file.originalname)
    }  
})

const upload = multer({storage})

router.post('/create',upload.single('photo'),async (req,res) => {
    try {
        const {name,age,email,phone,address} = req.body;
        const photopath = req.file ? req.file.path : null;
        const newStudent =new Student({
            name,
            age,
            email,
            phone,
            address,
            photo:photopath,
        });
        await newStudent.save();
        res.status(201).json({message:'Student Created', student:newStudent});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error Creating Strudent'});
    }
})

module.exports = router;