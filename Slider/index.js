let back = document.querySelector('#prev')
let next = document.querySelector('#next')

let current = 0;
let elem = document.querySelectorAll('#slider__list img');

function prevImg(){
    elem[current].removeAttribute('id');
    current = (current > 0)?(current - 1) % elem.length:elem.length - 1;
    elem[current].setAttribute('id', 'active');
}

function nextImg(){
    elem[current].removeAttribute('id');
    current = (current + 1) % elem.length;
    elem[current].setAttribute('id', 'active');
}

setInterval(nextImg, 3000);