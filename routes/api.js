const express = require("express");
const router = express.Router();
const path = require("path");


//html routes
router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/stats", function(req, res){
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

router.get("/exercise", function(req, res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

//api routes
router.post("/api/workouts", function(req, res){

})
module.exports = router;