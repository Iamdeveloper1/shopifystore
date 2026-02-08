
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        if (isOpen) {
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
            document.body.style.overflow = 'hidden';
        } else {
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
            document.body.style.overflow = 'auto';
        }
    });



    const swiper = new Swiper('.myHeroSlider', {
        loop: true,
        speed: 1000,
        // AutoHeight true karne se har image apni asli height ke mutabiq adjust ho jayegi
        autoHeight: true, 
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

