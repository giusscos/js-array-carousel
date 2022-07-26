// sorgente img
const img = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

let slideArrayElement = []

let counter = 0

//Acquisizione slider e arrows
const sliderElment = document.querySelector('.slider');
const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');

// creazione elementi: DIV e IMG e Riempimento sorgenti img
for (let i = 0; i < img.length; i++){
    const slideElement = document.createElement('div');
    slideElement.className = 'slide_wrapper';
    // alla prima img active di default 
    if (i === 0){
        slideElement.classList.add('active');
    }
    
    const slideImgElement = document.createElement('img');
    slideImgElement.src = img[i];
    
    // aggiungiamo le img al div
    slideElement.append(slideImgElement);
    
    // aggiungiamo le slide allo slider
    sliderElment.append(slideElement);
    slideArrayElement.push(slideElement);
}

arrowRightElement.addEventListener('click', function() {

    const slideActiveElement = slideArrayElement[counter];
    slideActiveElement.classList.remove('active');
    
    const slideNextElement = slideArrayElement[counter + 1];
    slideNextElement.classList.add('active');
    
    counter++;
});
arrowLeftElement.addEventListener('click', function() {

    const slideActiveElement = slideArrayElement[counter];
    slideActiveElement.classList.remove('active');
    
    const slideNextElement = slideArrayElement[counter - 1];
    slideNextElement.classList.add('active');
    
    counter--;
});