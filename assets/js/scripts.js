function copyZero(text) {
    navigator.clipboard.writeText(text);
    const copySec = document.getElementById('copySec');
    copySec.classList.add('show'); // เพิ่มคลาส show
    // ตั้งเวลาให้หายไปหลัง 2 วินาที
    setTimeout(function() {
        copySec.classList.remove('show'); // ลบคลาส show
    }, 2000);
}

function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
}


// Smooth Scroll
SmoothScroll({
    speed: 10,
    speedAsDuration: true,
    easing: 'easeInOutCubic',
    offset: 5,
    updateURL: true,
    popstate: true
  });



new PlayerCounter({
    element: element,
    ip: 'server ip',
    format: '{online}/{max}' // default {online}
    ,refreshRate: 5 * 1000 // default 1m
  });