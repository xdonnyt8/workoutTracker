const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema( 
{
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            set: {
                type: Number
            },
            rep: {
                type: Number
            },
            duration: {
                type: Number
            }

        }
    ]
    

})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;