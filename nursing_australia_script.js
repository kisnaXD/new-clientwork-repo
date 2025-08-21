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

    document.getElementById('not-yet-button').addEventListener('click', function () {
        document.getElementById('not-yet-head').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    })

});