window.addEventListener('load', () => {
    let progressBars = document.querySelectorAll(".progress__bar");
    let values = [
        '80%',
        '70%',
        '50%',
        '50%',
        '80%',
        '70%',
        '80%'
    ];
    progressBars.forEach((progress,index) => {
        progress.style.width = values[index];
    });
});

const navToggle = document.querySelector ('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});


function switchSheet() {
    let theme = document.getElementById("theme");
  
    if (theme.getAttribute("href") == "./CSS/dark.css") {
      theme.href = "./CSS/normal.css";
    } else {
      theme.href = "./CSS/dark.css";
    }
}