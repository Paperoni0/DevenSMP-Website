const countdownDate = new Date("October 25, 2024 00:00:00 GMT+0700").getTime();

const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("seconds").innerHTML = seconds + "s";
    if (distance < 0) {
        document.getElementById('reminder').disabled = true;
        document.getElementById("days").innerHTML = "0d";
        document.getElementById("hours").innerHTML = "0h";
        document.getElementById("minutes").innerHTML = "0m";
        document.getElementById("seconds").innerHTML = "0s";
        clearInterval(x);
    }
}, 1000);

document.getElementById('reminder').addEventListener('click', () => {
    if (!('Notification' in window)) {
        console.error('This browser does not support notifications');
        return;
    }
    if (Notification.permission === 'granted') {
        scheduleReminder();
    } else if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                scheduleReminder();
            } else {
                alert('Notification permission is denied, please allow the notification access for this to work!');
            }
        });
    } else {
        alert('Notification permission is denied, please allow the notification access for this to work!');
    }
});

function scheduleReminder() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    setTimeout(() => {
        const notification = new Notification("DevenSMP's 2nd Anniversary", {
            body: "Today is DevenSMP's 2nd Anniversary! Happy birthday DevenSMP!",
            icon: '../assets/images/logo.png'
        });
    }, distance);
}