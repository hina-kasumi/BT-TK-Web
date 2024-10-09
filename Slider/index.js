"use strict";

let back = document.querySelector('#prev')
let next = document.querySelector('#next')

let currTran = 0;
let elem = document.querySelectorAll('#slider__list img');

let inter;

function startInterval() {
    inter = setInterval(nextImg, 5000);
}

startInterval(); // bắt đầu tự động chuyển ảnh

// chuyển ảnh khi click vào nút prev
function prevImg() {
    clearInterval(inter);
    currTran += 100;
    if (currTran > 0)
        currTran = -100 * (elem.length - 2);
    for (let i = 0; i < elem.length; i++) {
        elem[i].animate([
            { transform: `translateX(${currTran - 100}%)` },
            { transform: `translateX(${currTran}%)` }
        ],
            {
                duration: 1000,
                fill: 'forwards'
            });
    }
    startInterval();
}

// chuyển ảnh khi click vào nút next
function nextImg() {
    clearInterval(inter);
    for (let i = 0; i < elem.length; i++) {
        elem[i].animate([
            { transform: `translateX(${currTran}%)` },
            { transform: `translateX(${currTran - 100}%)` }
        ],
            {
                duration: 1000,
                fill: 'forwards'
            });
    }
    currTran -= 100;
    if (currTran == -100 * (elem.length - 1)) {
        currTran = 0;
    }
    startInterval();
}

back.addEventListener('click', prevImg);
next.addEventListener('click', nextImg);


