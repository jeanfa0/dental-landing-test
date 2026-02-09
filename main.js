// Script para el Preloader (Diseñado por Jean Avalos)
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    preloader.style.visibility = 'hidden';
                }, 1000);
            }
        });

        window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-scrolled');
    } else {
        nav.classList.remove('shadow-scrolled');
    }
});