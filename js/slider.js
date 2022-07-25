var sliderContent = document.querySelector('.slider-content');
var sliderBox = document.querySelectorAll('.slider-content .slider_box');
var btnPrev = document.querySelector('.slider_nav .slider_nav-prev');
var btnNext = document.querySelector('.slider_nav .slider_nav-next');
var radio = document.querySelectorAll('.slider_radio .radio');
var i = 1;
var result = 0;

function setRadio(sub) {
    var active = document.querySelectorAll('.radio.active')
    for (var z = 0; z < active.length; z++) {
        active[z].classList.remove('active')
    }
    sub.classList.add('active')
};

function setSlider(par, index) {
    sliderContent.style.transform = `translateX(${result += par}px)`;
    index;
};

btnNext.addEventListener('click', function () {
    if (i >= sliderBox.length) return;
    result = -1500 * i;
    setSlider(0, i++);
    setRadio(radio[i - 1]);
});

btnPrev.addEventListener('click', function () {
    if (i <= 1) return;
    setSlider(1500, i--);
    setRadio(radio[i - 1]);
});

for (var index = 0; index < radio.length; index++) {
    radio[index].addEventListener('click', function () {
        i = this.dataset.radio;
        result = -1500 * i;
        setSlider(0, i++);
        setRadio(this);
    })
};