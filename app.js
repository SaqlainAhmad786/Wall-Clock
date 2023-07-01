const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const deg = 6

const setclock = ()=>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;

    hour.style.transform = `rotatez(${hh+mm/12}deg)`
    minute.style.transform = `rotatez(${mm}deg)`
    second.style.transform = `rotatez(${ss}deg)`
}

setclock()
setInterval(setclock, 1000)