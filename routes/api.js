const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../model")

//html routes
router.get("/",  (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/stats", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

router.get("/exercise",  (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

//api routes
router.post("/api/workouts", async  (req, res)=> {
    try {
        const data = await db.Workout.create({ type: "workout" })
        res.json(data)
    }
    catch(err){
        console.log("Something Broke!", err)
    }
})

router.put("/api/workouts/:id", ({body, params}, res)=>{
    const exerciseId = params.id

    let myExercises = [];
    db.Workout.find({_id: exerciseId}).then(exDB => {
         
    })
})

module.exports = router;