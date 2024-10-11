const images = document.getElementsByClassName('img');

let index = 0; // thu tu img hien thi

function next() {
    images[index].classList.remove('active');
    index++;
    index = index % images.length;
    images[index].classList.add('active');
}

function prev() {
    images[index].classList.remove('active');
    index--;
    index = index % images.length;
    images[index].classList.add('active');
}