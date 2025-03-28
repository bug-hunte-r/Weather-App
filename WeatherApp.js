//9e5ed5ca4cc9bfcc64204f40b23b2d7a

let input = document.querySelector('.search-box')
let city = document.querySelector('.city')
let date = document.querySelector('.date')
let temp = document.querySelector('.temp')
let weather = document.querySelector('.weather')
let hiLow = document.querySelector('.hi-low')

function showData (data) {

    city.innerHTML = input.value + ', ' + data.sys.country
    date.innerHTML = showDate()
    temp.innerHTML = Math.floor(data.main.temp - 273.15) + '°c'
    weather.innerHTML = data.weather[0].main
    hiLow.innerHTML = Math.floor(data.main.temp_min - 273.15) + '°c' + ' / ' + Math.floor(data.main.temp_max - 273.15) + '°c'
}


function showDate () {


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()
    
    return `${day} ${date} ${month} ${year}`
}