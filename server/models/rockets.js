const mongoose = require('mongoose')

const rocketSchema = mongoose.Schema({
    flightNumber: { type: Number },
    mission: { type: String },
    launchDate: { type: Date },
    rocket: { type: String },
    target: { type: String },
    customer: { type: Array },
    upcoming: { type: Boolean },
    success: { type: Boolean }


})

const Rockets = mongoose.model("Rockets", rocketSchema)

module.exports = Rockets