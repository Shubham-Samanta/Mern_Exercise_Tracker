const express = require('express')
const router = express.Router()
let Exercise=require('../models/exercise.models')

router.get('/', (req, res) => {
     Exercise.find()
          .then((exercises)=>{res.json(exercises)})
          .catch((err)=>{res.status(400).json(err)})
})
router.post('/add',(req, res)=> {
     const username = req.body.username
     const description = req.body.description
     const duration = Number(req.body.duration)
     const  date= Date.parse(req.body.date)

     const newExercise = new Exercise({
          username,
          description,
          date,
          duration,
     })
     newExercise.save()
          .then(()=>{res.json('exercise added')})
          .catch((err)=>{res.status(400).json(err)})
})

router.get('/:id',(req, res) => {
     Exercise.findById(req.params.id)
          .then((exercises) => { res.json(exercises) })
          .catch((err)=>{res.status(400).json(err)})
})

router.delete('/:id', (req, res) => {
     Exercise.findByIdAndDelete(req.params.id)
          .then((exercises) => { res.json("erercise have been deleted") })
          .catch((err)=>{res.status(400).json(err)})
})

router.post('/update/:id', (req, res) => {
     Exercise.findById(req.params.id)
          .then((exercises) => {
               exercises.username = req.body.username,
               exercises.description = req.body.description,
               exercises.duration = Number(req.body.duration),
               exercises.date = Date.parse(req.body.date)
               
               exercises.save()
                    .then(() => { res.json("updated the exercise") })
                    .catch((err)=>{req.status(400).json(err)})
          })
     .catch((err)=>{req.status(400).json(err)})
})
module.exports=router