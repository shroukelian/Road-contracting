// 1. Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Mobile Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 3. Scroll Animation (النسخة النهائية التي تكرر الأنيميشن)
const scrollElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
}, {
    threshold: 0.1
});

scrollElements.forEach(el => {
    observer.observe(el);
});
// ======================= New Multi-Video Modal Logic =======================
const playBtn = document.getElementById('play-video-btn');
const videoModal = document.getElementById('video-modal');
const closeBtn = document.querySelector('.close-video');
const videoChoiceCards = document.querySelectorAll('.video-choice-card');
const youtubePlayer = document.getElementById('youtube-player');

if (playBtn && videoModal && closeBtn) {
    // 1. فتح نافذة الاختيار
    playBtn.addEventListener('click', () => {
        videoModal.classList.add('active');
    });

    // 2. عند اختيار فيديو
    videoChoiceCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.dataset.videoId;
            youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            videoModal.classList.add('video-is-playing');
        });
    });

    // 3. عند إغلاق النافذة
    const closeModal = () => {
        videoModal.classList.remove('active');
        videoModal.classList.remove('video-is-playing');
        youtubePlayer.src = ''; // مهم جداً: إيقاف الفيديو
    };

    closeBtn.addEventListener('click', closeModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeModal();
        }
    });
}

// التأكد من أن العناصر موجودة قبل إضافة event listeners
if (playBtn && videoModal && closeBtn) {
    playBtn.addEventListener('click', () => {
        videoModal.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        videoModal.classList.remove('active');
    });

    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
        }
    });
}
