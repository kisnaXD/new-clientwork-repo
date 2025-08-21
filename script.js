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

const ins = document.getElementById('ins-icon');
const fb = document.getElementById('fb-icon');
const lin = document.getElementById('lin-icon')
ins.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/ed2careers/";
})
fb.addEventListener('click', () => {
    window.location.href = "https://www.facebook.com/ed2careers";
})
lin.addEventListener('click', () => {
    window.location.href = "https://www.linkedin.com/company/ed2careers";
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

    // ---- CAROUSEL CODE ----

    const images = [
        './assets/hero-carousel-1.png',
        './assets/hero-carousel-2.gif', 
        './assets/hero-carousel-3.png'
    ];

    const carousel = document.getElementById('carousel');
    const indicators = document.getElementById('carousel-indicators');

    let currentIndex = 0;

    function createCarousel() {
        images.forEach((src, index) => {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Image ${index + 1}`;
            
            item.appendChild(img);
            carousel.appendChild(item);

            item.addEventListener('click', () => {
                currentIndex = index;
                if(currentIndex === 2) {
                    window.location.href = 'artemis.html'
                }
                updateCarousel(currentIndex);
                
            });

            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = 'carousel-indicator';
            indicators.appendChild(indicator);
        });
        
        // Initial update
        updateCarousel(0);
        
        // Force a second update after a slight delay to ensure all styles are applied
        setTimeout(() => {
            updateCarousel(0);
        }, 100);
        
        // Start auto-rotation every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel(currentIndex);
        }, 5000);
    }

    // Update carousel to show correct 3 images and update indicators
    function updateCarousel(centerIndex) {
        const items = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.carousel-indicator');
        const viewportWidth = window.innerWidth;
        
        // Reset all items
        items.forEach(item => {
            item.style.transform = 'scale(0) translateZ(-5000px)';
            item.style.opacity = '0';
            item.style.zIndex = '0';
            item.style.display = 'none';
        });

        // Reset all indicators
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Calculate indices for visible items (only prev, center, next)
        const totalItems = items.length;
        const prevIndex = (centerIndex - 1 + totalItems) % totalItems;
        const nextIndex = (centerIndex + 1) % totalItems;

        // Decrease the spacing between images
        const sideTranslateX = viewportWidth > 1000 ? viewportWidth * 0.46 : viewportWidth * 0.72;  // Decreased spacing
        
        // Make only three visible items displayed
        items[prevIndex].style.display = 'block';
        items[centerIndex].style.display = 'block';
        items[nextIndex].style.display = 'block';
        
        // Position the prev item (left)
        items[prevIndex].style.transform = `translateX(-${sideTranslateX}px) translateZ(-400px) rotateY(50deg) scale(0.95)`;
        items[prevIndex].style.opacity = '0.7';
        items[prevIndex].style.height = 'min(45vh, 400px)';
        items[prevIndex].style.zIndex = '1';
        
        // Position the center (active) item
        items[centerIndex].style.transform = 'translateZ(400px) scale(1)';
        items[centerIndex].style.height = '210px';
        items[centerIndex].style.opacity = '1';
        items[centerIndex].style.zIndex = '3';
        
        // Position the next item (right)
        items[nextIndex].style.transform = `translateX(${sideTranslateX}px) translateZ(-400px) rotateY(-50deg) scale(0.95)`;
        items[nextIndex].style.opacity = '0.7'; 
        items[nextIndex].style.height = 'min(45vh, 400px)';
        items[nextIndex].style.zIndex = '1';

        // Activate the current indicator
        dots[centerIndex].classList.add('active');
    }

    // Handle window resize to ensure carousel adapts to screen size
    window.addEventListener('resize', () => {
        updateCarousel(currentIndex);
    });

    // Initialize
    createCarousel();

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('glow');
        } else {
            navbar.classList.remove('glow');
        }
    });

    // ---- CAROUSEL TESTIMONIALS CODE (no change for 3 images) ----
    const carouselT = document.querySelector('.carousel-container-testimonials');
    const itemsT = document.querySelectorAll('.carousel-item-testimonials');
    let currentIndexTestimonials = 0;

    function startCarousel() {
        setInterval(() => {
            currentIndexTestimonials = (currentIndexTestimonials + 1) % itemsT.length;
            carouselT.style.transition = 'transform 1s ease';
            carouselT.style.transform = `translateX(-${currentIndexTestimonials * 60}vw)`;
        }, 20000);
    }

    startCarousel();
});