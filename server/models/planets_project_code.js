const { rejects } = require('assert');
const { parse } = require('csv-parse');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path')
const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}
function loadPlanets() {
  return new Promise((resolve, rejects) => {
    fs.createReadStream(path.join(__dirname, './kepler_data.csv'))
      .pipe(parse({
        comment: '#',
        columns: true,
      }))
      .on('data', (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on('error', (err) => {
        console.log(err);
      })
      .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve()
      })
  })
}


module.exports = {
  planets: habitablePlanets,
  loadPlanets
}