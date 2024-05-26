const express = require('express');
const router = express.Router.Router();
const EnrolledCourse = require('../models/EnrolledCourse');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const enrolledcourses = await EnrolledCourse.find();
        res.json(enrolledcourses);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const enrolledcourse = await EnrolledCourse.findById(req.params.id);
        res.json(enrolledcourse);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { enrolledby, courseid, date } = req.body;
    const enrolledcourse = new EnrolledCourse(
        {
            enrolledby,
            courseid,
            date
        }
    )
    try{
        const newenrolledcourse = await enrolledcourse.save();
        res.status(201).json(newenrolledcourse);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateEnrolledCourse = await EnrolledCourse.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateEnrolledCourse);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await EnrolledCourse.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;