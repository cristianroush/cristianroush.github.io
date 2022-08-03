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
    
    theme.href = "./CSS/style.css";
  } else {
    theme.href = "./CSS/dark.css";
  }
}

var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 4500,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });

  window.onload = function(){
    var preloader = document.getElementById('loader');
    setTimeout(() => {
      preloader.classList.add('close');
  },3000 );
  }