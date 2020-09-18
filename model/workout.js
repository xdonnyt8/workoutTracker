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
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            }

        }
    
    ],
    day: {
        type: Date,
        default: Date.now
    }

})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;