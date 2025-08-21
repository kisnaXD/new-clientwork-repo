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

const ga = document.getElementById('ga-icon');
const aa = document.getElementById('aa-icon');
const ma = document.getElementById('ma-icon');
ga.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/geetanjali-alamshah/'
})
aa.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/amanda-alamshah/'
})
ma.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/manisha-agnihotri/'
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
    const track = document.getElementById('statCarouselTrack');
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
  if (track) {
    const blocks = Array.from(track.querySelectorAll('.stat-block'));
    const leftBtn = document.getElementById('statCarouselLeft');
    const rightBtn = document.getElementById('statCarouselRight');
    const indicatorsContainer = document.getElementById('statCarouselIndicators');
    let currentIndex = 0;
    const total = blocks.length;

    // Create indicators
    indicatorsContainer.innerHTML = '';
    blocks.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = 'dot' + (idx === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToIndex(idx));
      indicatorsContainer.appendChild(dot);
    });

    function updateCarousel() {
      const slideWidth = track.offsetWidth;
      const offset = -currentIndex * slideWidth;
      track.style.transform = `translateX(${offset}px)`;

      // Update indicators
      Array.from(indicatorsContainer.children).forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
      // Disable arrows at ends (optional for infinite loop)
      leftBtn.disabled = (currentIndex === 0);
      rightBtn.disabled = (currentIndex === total - 1);
    }

    function goToIndex(idx) {
      if (idx < 0) idx = 0;
      if (idx >= total) idx = total - 1;
      currentIndex = idx;
      updateCarousel();
    }

    leftBtn && (leftBtn.onclick = () => goToIndex(currentIndex - 1));
    rightBtn && (rightBtn.onclick = () => goToIndex(currentIndex + 1));

    // Swipe support for mobile
    let startX = 0;
    let isDown = false;
    track.addEventListener('touchstart', function(e) {
      isDown = true;
      startX = e.touches[0].clientX;
    });
    track.addEventListener('touchend', function(e) {
      if (!isDown) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 40) goToIndex(currentIndex - 1);
      else if (dx < -40) goToIndex(currentIndex + 1);
      isDown = false;
    });

    // Responsive: recalculate offset on resize
    window.addEventListener('resize', updateCarousel);

    updateCarousel();
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
    const mediaContainer = document.querySelector('.hero-left-image');
    const mainImage = document.getElementById('heroMainImage');
    const thumbs = document.querySelectorAll('.video-thumb');
    let playingVideo = null;
    
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
        thumbs.forEach(t => t.classList.remove('selected'));
        this.classList.add('selected');
        if (playingVideo) {
            playingVideo.pause();
            playingVideo.remove();
            playingVideo = null;
        }
        mainImage.style.display = 'none';
        const videoSrc = this.getAttribute('data-video');
        const video = document.createElement('video');
        video.src = videoSrc;
        video.controls = true;
        video.autoplay = true;
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.style.borderRadius = "18px";
        mediaContainer.appendChild(video);
        playingVideo = video;
        video.addEventListener('ended', function() {
            video.remove();
            mainImage.style.display = '';
            thumbs.forEach(t => t.classList.remove('selected'));
            playingVideo = null;
        });
        });
    });
});