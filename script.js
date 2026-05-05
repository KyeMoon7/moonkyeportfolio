const mySwiperOne = new Swiper('.mySwiper', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    effect: 'flip',


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

(function () {
    const svgElement = document.getElementById('mail');
    const statusElement = document.getElementById('gmail');
    const textToCopy = "kyemoonovechka@gmail.com";

    // Function to copy text to clipboard
    async function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            // Modern async clipboard API
            await navigator.clipboard.writeText(text);

        }

    }

    // Attach click event to SVG
    svgElement.addEventListener('click', () => {
        copyText(textToCopy);

        alert("✅ email copied! / ✅ courriel copié!"
        );
    });
})();