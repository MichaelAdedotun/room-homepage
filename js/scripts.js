const close = document.getElementById('close-btn');
const open = document.getElementById('open-btn');
const article = document.getElementById('article');
let slider = document.querySelectorAll('.slide');
let active = document.querySelector('.slide.active');
let next = document.getElementById('next');
let prev = document.getElementById('prev');


open.addEventListener("click",(e) => {
    e.preventDefault();
    article.classList.add('show-article');
})

close.addEventListener("click",(e) => {
    e.preventDefault();
    article.classList.remove('show-article');
})

next.addEventListener('click', () => {
    let newActive;

    slider.forEach((slide, item) => {
        if (slide.classList.contains('active')) {
            if (item < (slider.length - 1)) {
                newActive = slider[item + 1];
                slide.classList.remove('active');
            }

            if (item === (slider.length - 1)) {
                newActive = slider[0];
                slide.classList.remove('active');
            }
        }
    });

    newActive.classList.add('active');

})

prev.addEventListener('click', () => {
    let newActive;

    slider.forEach((slide, item) => {
        if (slide.classList.contains('active')) {
            if (item > 0) {
                newActive = slider[item - 1];
                slide.classList.remove('active');
            }

            if (item === 0) {
                newActive = slider[slider.length - 1];
                slide.classList.remove('active');
            }
        }
    });

    newActive.classList.add('active');

})

