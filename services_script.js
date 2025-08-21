const navLinks = document.querySelectorAll('.navbar a');
const navbar = document.querySelector('.navbar');
const underline = document.querySelector('.navbar .underline');

function updateUnderline() {
const activeLink = document.querySelector('.navbar a.active');
if (activeLink) {
    const isLastChild = activeLink === navLinks[navLinks.length - 1];
    if (isLastChild) {
        underline.style.display = 'none';
    } else {
        underline.style.display = 'block';
        const linkRect = activeLink.getBoundingClientRect();
        const navbarRect = navbar.getBoundingClientRect();
        const translateX = linkRect.left - navbarRect.left + (linkRect.width - 38) / 2;
        underline.style.transform = `translateX(${translateX}px)`;
        underline.style.left = `${translateX * 0.03}px`
    }
}
}

const socialCare = document.querySelector('.courses-container-1');
const nursing = document.querySelector('.courses-container-2');
socialCare.addEventListener('click', () => {
  window.location.href = "social-care.html";
})
nursing.addEventListener('click', () => {
  window.location.href = "nursing_uk.html";
})

navLinks.forEach(link => {
link.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    if(this.innerText === "Services") {
        window.location.href = "services.html";
    } 
    if(this.innerText === "Artemis Partnership") {
        window.location.href = "artemis.html";
    } 
    if(this.innerText === "Home") {
        window.location.href = "index.html"
    }
    if(this.innerText === "About Us") {
        window.location.href = "about-us.html"
    }
    if(this.innerText === "Social Care") {
        window.location.href = "social-care.html"
    }
    if(this.innerText === "Nursing UK") {
        window.location.href = "nursing_uk.html"
    }
    if(this.innerText === "Nursing Australia") {
        window.location.href = "nursing_australia.html"
    }
    requestAnimationFrame(() => {
        updateUnderline();
    });
});
});

window.addEventListener('load', updateUnderline);
window.addEventListener('resize', updateUnderline);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger-menu').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });

    document.getElementById('closebtn').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('active');
    });
    
    document.addEventListener('click', function(event) {
        var sidebar = document.getElementById('sidebar');
        var hamburger = document.getElementById('hamburger');
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) { // Adjust the scroll value as needed
            navbar.classList.add('glow');
        } else {
            navbar.classList.remove('glow');
        }
    });

    function isMobile() {
        return window.matchMedia("(max-width: 767px)").matches;
    }

    if (isMobile()) {
        const item1 = document.querySelector(".courses-container-1");
        const arrow1 = document.getElementById("ab-1");
        const observer1 = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-on-scroll");
                arrow1.classList.add("color-on-scroll");
                arrow1.classList.add("rotate-on-scroll");
                arrow1.style.backgroundColor = "#8a6eff";
              } else {
                entry.target.classList.remove("animate-on-scroll");
                arrow1.classList.remove("color-on-scroll");
                arrow1.classList.remove("rotate-on-scroll");
                arrow1.style.backgroundColor = "#ffeac8";
              }
            });
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
          }
        );
        const item2 = document.querySelector(".courses-container-2");
        const arrow2 = document.getElementById("ab-1");
        const observer2 = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-on-scroll");
                arrow2.classList.add("color-on-scroll");
                arrow2.classList.add("rotate-on-scroll");
                arrow2.style.backgroundColor = "#8a6eff";
              } else {
                entry.target.classList.remove("animate-on-scroll");
                arrow2.classList.remove("color-on-scroll");
                arrow2.classList.remove("rotate-on-scroll");
                arrow2.style.backgroundColor = "#ffeac8";
              }
            });
          },
          {
            root: null, 
            rootMargin: "0px", 
            threshold: 0.1, 
          }
        );
        const item3 = document.querySelector(".courses-container-3");
        const arrow3 = document.getElementById("ab-1");
        const observer3 = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-on-scroll");
                arrow3.classList.add("color-on-scroll");
                arrow3.classList.add("rotate-on-scroll");
                arrow3.style.backgroundColor = "#8a6eff";
              } else {
                entry.target.classList.remove("animate-on-scroll");
                arrow3.classList.remove("color-on-scroll");
                arrow3.classList.remove("rotate-on-scroll");
                arrow3.style.backgroundColor = "#ffeac8";
              }
            });
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
          }
        );
        observer1.observe(item1)
        observer3.observe(item3);
        observer2.observe(item2);
    }
});