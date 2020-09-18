const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../model")

//html routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

//api routes

router.get('/api/workouts', (req, res) => {
    db.Workout.find({}).then(myWorkouts => {
        res.json(myWorkouts);
    })
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    try {
        const data = db.Workout.create({ type: "workout" })
        res.json(data)
    }
    catch (err) {
        console.log("Something Broke!", err)
    }
})

router.put("/api/workouts/:id", ({ body, params }, res) => {
    const ID = params.id;
    let myExercises = [];

    db.Workout.find({ _id: ID })
        .then(db => {
            myExercises = db[0].exercises;
            res.json(db[0].exercises);
            let allExercises = [...myExercises, body]
            update(allExercises)
        })
        .catch(err => {
            res.json(err);
        });

    function update(exercises) {
        db.Workout.findByIdAndUpdate(ID, { exercises: exercises }, function (err, data) {
            if (err) throw err
        })
    }

})




module.exports = router;