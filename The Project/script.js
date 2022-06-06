const clock = document.querySelector('.clock')
function updateTime() {
    const date = new Date();

    const hours = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    clock.innerHTML = `${hours} : ${minutes} : ${seconds}s`;
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time
    }
    return time; // for do 06 and not 6 in minutes for example
}

clock.addEventListener('click', () =>{
    clock.classList.add('.active')
});



updateTime();
setInterval(updateTime, 1000); //to Update clock time


