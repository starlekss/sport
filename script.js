// Мобильное меню
const mobileBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Плавная навигация
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        }
    });
});

// Обработка формы
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо! Мы свяжемся с вами в ближайшее время 💪');
        this.reset();
    });
}

// Закрытие меню при ресайзе
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});