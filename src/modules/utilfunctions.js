let SunCalc = require('suncalc')

/**
 * Return a object of keys from 0-23 each of which contains day-light intensity
 * @param date - The Date you are checking for
 * @param latitude - The Latitude of the location you are checking
 * @param longitude - The Longitude of the location you are checking
 */
 export function generateRow(date, latitude, longitude) {

    console.log("break")
    console.log(date)

    let gradient_array = generateGradient(date, latitude, longitude)

    let sun_data = SunCalc.getTimes(date, latitude, longitude)

    let row_data = {}

    let sunrise_hours = sun_data.sunrise.getHours()

    for(let i=0; i<=23; i++) {
        row_data[i] = 0.00
    }

    console.log("sunrise", sunrise_hours)
    console.log("sunset", sun_data.sunset.getHours())
    console.log("gradient length", gradient_array.length)

    for (let i = sunrise_hours; i < sunrise_hours + gradient_array.length; i++) {

            let loopable_index = i > 23 ? i - 24 : i

            row_data[loopable_index] = gradient_array[i - sunrise_hours]

    }
    console.log(row_data)
    return row_data
}

export function generateGradient(date, latitude, longitude) {

    let sunData = SunCalc.getTimes(date,latitude,longitude)

    let gradient_array = []

    let daylight_time = sunData.sunset - sunData.sunrise
    let daylight_hours = Math.round(daylight_time / (3600 * 1000)) - 1

    let daylight_gradient = betterRound(1.0 / (daylight_hours / 2))

    console.log("Daylight hours", daylight_hours)
    

    for(let i = 0; i < daylight_hours; i++) {

        let push_value = 0.00 

        if ( i === 0 ) {
            push_value = daylight_gradient
        } else if( gradient_array.find(val => val >= 1.0) ) {
            push_value = betterRound(gradient_array[i-1] - daylight_gradient)
        } else {
            push_value = betterRound(gradient_array[i-1] + daylight_gradient)
        }
    
        gradient_array.push(push_value)
        
    }

    
    return gradient_array
 


}

function betterRound(number) {

    return Math.round(number * 100) / 100


}

