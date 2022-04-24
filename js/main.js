window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fullScreenBtn").addEventListener("click", openFullscreen);
    consoleWarning();
});


function openFullscreen() {
    var elem = document.documentElement;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
}




function changePage(x) {
  switch(x) {
    case 1:
      let x = document.getElementById('cover');
      x.style.zIndex = "5";
      x.classList.add('animate__animated', 'animate__fadeIn');
      setTimeout(function () {
        window.location.assign('storyline.html');
      }, 2000);
      break;
    case 2:
      window.location.assign('index.html');
    default:
      break;
  }
}





// Particles

particlesJS("particles-js", {
  particles: {
    number: { value: 400, density: { enable: true, value_area: 3000 } },
    color: { value: "#fc0000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: true, speed: 5, size_min: 0, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 7.8914764163227265,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);






function consoleWarning() {
  const style1 = [
    'color: #e63946',
    'text-shadow: 2px 2px #ff9505', 
    'background: #a8dadc',
    'font-size: 5em',
    'border: 2px solid #ff9505',
    'padding: 50px',
    'font-family: serif',
  ].join(';');
  console.log('%cHello World', style1)
}
