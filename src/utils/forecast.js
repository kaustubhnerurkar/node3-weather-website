const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0b41fd72b377bea1d34e5250af28e070/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si'
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% change of rain')
        }
    })
}

module.exports=forecast