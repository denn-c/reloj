const hours = document.getElementById('hora');
const minutes = document.getElementById('minuto');
const seconds = document.getElementById('segundo');
const rotation = 6

setInterval(() => {
    const date = new Date();
    const hour = date.getHours() * 30;
    const minute = date.getMinutes() * rotation;
    const second = date.getSeconds() * rotation;
    hours.style.transform = `rotateZ(${(hour + (minute / 12))+90}deg)`
    minutes.style.transform = `rotateZ(${minute + 90}deg)`
    seconds.style.transform = `rotateZ(${second + 90}deg)`
}, 1000);