const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();
    let array = [];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    array = [minutes, seconds]
    daySet = "AM"
    // const seconds = String(date.getSeconds()).padStart(2, "0")
    if( hours > 12) {
        hours = hours - 12;
        daySet = "PM"
        if (hours < 10) {
            hours = String(hours).padStart(2,"0");
        }
    }
    for (i=0; i<array.length; i++) {
        if (array[i] < 10 )
        array[i] = "0" + String(array[i]);


    }
    clock.innerText =   ` ${hours}:${array[0]}:${array[1]} ${daySet}`;
}


setInterval(getClock, 1000)