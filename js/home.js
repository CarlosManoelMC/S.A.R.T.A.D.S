const slider = document.querySelectorAll('.card_completo');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++;
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

const slider1 = document.querySelectorAll('.card_completo1');
const btnPrev1 = document.getElementById('prev-button1');
const btnNext1 = document.getElementById('next-button1');

let currentSlide1 = 0;

function hideSlider1() {
  slider1.forEach(item => item.classList.remove('on1'));
}

function showSlider1() {
  slider1[currentSlide1].classList.add('on1');
}

function nextSlider1() {
  hideSlider1()
  if(currentSlide1 === slider1.length -1) {
    currentSlide1 = 0
  } else {
    currentSlide1++;
  }
  showSlider1()
}

function prevSlider1() {
  hideSlider1()
  if(currentSlide1 === 0) {
    currentSlide1 = slider1.length -1
  } else {
    currentSlide1--
  }
  showSlider1();
}

btnNext1.addEventListener('click', nextSlider1);
btnPrev1.addEventListener('click', prevSlider1);

const slider2 = document.querySelectorAll('.card_completo2');
const btnPrev2 = document.getElementById('prev-button2');
const btnNext2 = document.getElementById('next-button2');

let currentSlide2 = 0;

function hideSlider2() {
  slider2.forEach(item => item.classList.remove('on2'));
}

function showSlider2() {
  slider2[currentSlide2].classList.add('on2');
}

function nextSlider2() {
  hideSlider2()
  if(currentSlide2 === slider2.length -1) {
    currentSlide2 = 0
  } else {
    currentSlide2++;
  }
  showSlider2()
}

function prevSlider2() {
  hideSlider2()
  if(currentSlide2 === 0) {
    currentSlide2 = slider2.length -1
  } else {
    currentSlide2--
  }
  showSlider2();
}

btnNext2.addEventListener('click', nextSlider2);
btnPrev2.addEventListener('click', prevSlider2);
