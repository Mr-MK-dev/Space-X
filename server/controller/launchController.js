const { planets } = require('../models/planets_project_code')
const Rockets = require('../models/rockets')

const getAllLaunches = async (req, res) => {

    const allLaunches = await Rockets.find().sort('flightNumber')

    return res.status(200).json(allLaunches)
}

async function launchRockets(req, res) {
    const theRoc = req.body
    theRoc.launchDate = new Date(launchDate)
    const theRocket = await Rockets.create(theRoc)



    return res.json(theRocket)

}


function getPlanets(req, res) {
    return res.status(200).json(planets)
}

module.exports = {
    launchRockets,
    getPlanets,
    getAllLaunches

}