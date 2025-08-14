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

// ===================================================================
// ==== الكود الجديد للأنيميشن المتكرر عند كل مرة يظهر العنصر ====
// ===================================================================
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // التحقق إذا كان العنصر حاليًا داخل الشاشة (isIntersecting)
        // الكود الجديد (يعمل مرة واحدة فقط)
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // بمجرد ظهور العنصر، نطلب من المراقب التوقف عن مراقبته
            observer.unobserve(entry.target);
        }
    });
}, {
    // نسبة ظهور العنصر على الشاشة لبدء الأنيميشن
    // 0.1 يعني أن الأنيميشن يبدأ عندما يكون 10% من العنصر ظاهرًا
    threshold: 0.1
});

// اجعل الـ observer يراقب كل العناصر التي تحمل كلاس .animate-on-scroll
scrollElements.forEach(el => {
    observer.observe(el);
});