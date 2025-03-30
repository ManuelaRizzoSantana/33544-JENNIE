const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    slidesPerView: 1, // Quantidade de slides visíveis no início

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2, // Mostrar 2 slides em telas médias
        },
        1024: {
            slidesPerView: 3, // Mostrar 3 slides em telas grandes
        }
    }
});
