gsap.to(".logo", {x: -10, ease:"bounce", duration: 2,})

gsap.from (".start", {x: 240, ease:"bounce", opacity: 0, duration: 2, stagger:1})


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > navbar.offsetHeight) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  function myFunction() {
    var x = document.getElementById("navbar1");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }



  