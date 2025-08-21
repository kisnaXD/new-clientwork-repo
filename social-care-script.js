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

const navItems = document.querySelectorAll('.nav-item');
const hoverCircle = document.querySelector('.hover-circle');
const row1 = document.querySelector('#row-1');
const row2 = document.querySelector("#row-2");

function updateHoverCirclePosition(activeItem) {
  const itemRect = activeItem.getBoundingClientRect();
  const navbarRect = activeItem.parentElement.getBoundingClientRect();
  hoverCircle.style.width = `${itemRect.width + 2}px`;
  hoverCircle.style.left = `${itemRect.left - navbarRect.left - 1}px`;
}

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');
    updateHoverCirclePosition(item);
    if(item.innerText === "Who We Enroll") {
        row2.classList.add('active');
        row1.classList.remove('active');
        setTimeout(() => {
            row2.style.transform = "translateY(0px)";
            row2.style.opacity = "1";
            row1.style.transform = "translateY(50px)";
            row1.style.opacity = "0";
        }, 1)
        document.querySelector('.selection-heading').innerText = "We enroll only those candidates who exhibit the essential values for a successful care career abroad:"
    } else if(item.innerText === "Selection Process") {
        row2.classList.remove('active');
        row1.classList.add('active');
        setTimeout(() => {
            row1.style.transform = "translateY(0px)";
            row1.style.opacity = "1";
            row2.style.transform = "translateY(50px)";
            row2.style.opacity = "0";
        }, 1);
        document.querySelector('.selection-heading').innerText = "Our Selection process includes : "
    }
  });
});

window.addEventListener('load', updateUnderline);
window.addEventListener('resize', updateUnderline);

document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.tm-carousel-image');
    const dots = document.querySelectorAll('.tm-dot');
    let current = 0;
    let timer = null;

    function show(idx) {
        if (!imgs.length) return;
        imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
        current = idx;
    }

    function next() {
        let nextIdx = (current + 1) % imgs.length;
        show(nextIdx);
    }

    function startAuto() {
        if (timer) clearInterval(timer);
        timer = setInterval(next, 3000);
    }

    // Dot click
    dots.forEach((dot, i) =>
        dot.addEventListener('click', function() {
        show(i);
        startAuto();
        })
    );

    // Init: show first image
    if (imgs.length > 0) {
        show(0);
        if (imgs.length > 1) startAuto();
    }

    // Pause on hover/tap
    const container = document.querySelector('.tm-carousel');
    if (container) {
        container.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
        container.addEventListener('mouseleave', startAuto);
        container.addEventListener('touchstart', () => { if (timer) clearInterval(timer); }, {passive: true});
        container.addEventListener('touchend', startAuto, {passive: true});
    }

    const imgs1 = document.querySelectorAll('.toc-carousel-image');
    const dots1 = document.querySelectorAll('.toc-dot');
    let current1 = 0;
    let timer1 = null;

    function show1(idx) {
        if (!imgs1.length) return;
        imgs1.forEach((img, i) => img.classList.toggle('active', i === idx));
        dots1.forEach((dot, i) => dot.classList.toggle('active', i === idx));
        current1 = idx;
    }

    function next1() {
        let nextIdx = (current1 + 1) % imgs1.length;
        show1(nextIdx);
    }

    function startAuto1() {
        if (timer1) clearInterval(timer1);
        timer1 = setInterval(next1, 3000);
    }

    // Dot click
    dots1.forEach((dot, i) =>
        dot.addEventListener('click', function() {
        show1(i);
        startAuto1();
        })
    );

    // Init: show first image
    if (imgs1.length > 0) {
        show1(0);
        if (imgs1.length > 1) startAuto1();
    }

    // Pause on hover/tap
    const container1 = document.querySelector('.toc-carousel');
    if (container1) {
        container1.addEventListener('mouseenter', () => { if (timer1) clearInterval(timer1); });
        container1.addEventListener('mouseleave', startAuto1);
        container1.addEventListener('touchstart', () => { if (timer1) clearInterval(timer1); }, {passive: true});
        container1.addEventListener('touchend', startAuto1, {passive: true});
    }
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
    const activeItem = document.querySelector('.nav-item.active');
    if (activeItem) {
        updateHoverCirclePosition(activeItem);
    }
    row1.style.transform = "translateY(0px)";
    row1.style.opacity = "1";
});