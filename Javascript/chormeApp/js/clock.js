const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();
    let array = [];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    array = [hours, minutes, seconds]
    // const seconds = String(date.getSeconds()).padStart(2, "0")
    for (i=0; i<array.length; i++) {
        if (array[i] < 10 )
        array[i] = "0" + String(array[i]);
        if (array[0] > 12 )
        array[0] = array[0] - 12;

    }
    clock.innerText = `${array[0]}:${array[1]}:${array[2]}`;
}


setInterval(getClock, 1000)