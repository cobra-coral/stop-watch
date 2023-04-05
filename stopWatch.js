const START = document.querySelector('.start').addEventListener('click', count)
const PAUSE = document.querySelector('.pause').addEventListener('click', pause)
const STOP = document.querySelector('.stop').addEventListener('click', stop)
let display = document.querySelector('#display')
let ms = 0
let sec = 0
let min = 0
let hr = 0
let interval

function milisecond(mili) {
    if (mili < 10) {
        return '00' + mili
    } else if (mili < 100) {
        return '0' + mili
    }
}

function twoDigits(digit) {
    if (digit < 10) {
        return '0' + digit
    } else {
        return digit
    }
}

function count() {
    interval = setInterval(watch, 10) 
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    ms = 0
    sec = 0
    min = 0
    hr = 0
    display.innerHTML = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec) + ':' + milisecond(ms)
}

function watch() {
    ms ++
    if (ms == 100) {
        sec ++
        ms = 0
    } display.innerHTML = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec) + ':' + milisecond(ms)

    if (sec == 60) {
        min ++
        sec = 0
    } display.innerHTML = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec) + ':' + milisecond(ms)

    if (min == 60) {
        hr ++
        min = 0
        sec = 0
    } display.innerHTML = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec) + ':' + milisecond(ms)
}
