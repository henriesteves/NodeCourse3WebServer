const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/f52e37bf860e9873b61ca3d23c925080/${latitude},${longitude}?units=si`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location!', undefined)
    } else {
      const { temperature, precipProbability } = body.currently

      callback(undefined, `${body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast

// const url = 'https://api.darksky.net/forecast/f52e37bf860e9873b61ca3d23c925080/37.8267,-122.4233?units=si'
// // https://darksky.net/dev/docs

// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!')
//   } else if (response.body.error) {
//     console.log('Unable to find location!')
//   } else {
//     // console.log(response.body.currently)

//     const { temperature, precipProbability } = response.body.currently
//     console.log(`${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
//   }
// })
