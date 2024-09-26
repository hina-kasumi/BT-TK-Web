function getRandomColor() {
    // Tạo các giá trị ngẫu nhiên cho đỏ, xanh lá cây và xanh dương
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Trả về màu theo định dạng rgb(r, g, b)
    return `rgb(${r}, ${g}, ${b})`;
}


const block = document.getElementsByClassName("block"); // init

const FPS = 60;
const f = 1_000.0 / FPS; // frame per second

const winWidth = window.innerWidth; // lấy chiều dài của cửa sổ
const winHeight = window.innerHeight; // lấy chiều rộng của cửa sổ

let numberBlock = block.length;
console.log(numberBlock);


let x = [], speedX = [];
let y = [], speedY = [];
let blockSize = [];

let scale = 50;
if (winWidth <= 400) // responsive 
    scale = 10;

// khởi tạo giá trị ban đầu cho các biến
for (let i = 0; i < numberBlock; i++) {

    blockSize[i] = Math.random() * scale + scale;
    block[i].style.width = blockSize[i] + "px";

    block[i].style.height = blockSize[i] + "px";

    speedX[i] = (Math.random() > 0.5) ? 1 : -1;
    speedY[i] = (Math.random() > 0.5) ? 1 : -1;

    //khởi tạo tọa độ ban đầu
    x[i] = Math.random() * (winWidth - blockSize[i] - 1);
    y[i] = Math.random() * (winHeight - blockSize[i] - 1);
    block[i].style.left = x[i] + "px";
    block[i].style.top = y[i] + "px";

    block[i].style.backgroundColor = getRandomColor(); // lấy màu radom
}



// hàm di chuyển các block
function move() {
    let id = setInterval(frame, f); // kích hoạt luồng

    function frame() {
        for (let i = 0; i < numberBlock; i++) {
            speedX[i] *= (x[i] + blockSize[i] >= winWidth - 1 || x[i] < 0) ? -1 : 1; //nếu chạm 1 trong 2 cạnh trái phải của số thì bật lại
            //update position
            x[i] += speedX[i];
            block[i].style.left = x[i] + "px";

            speedY[i] *= (y[i] + blockSize[i] >= winHeight - 1 || y[i] < 0) ? -1 : 1; //nếu chạm 1 trong 2 cạnh trên dưới của số thì bật lại
            //update position
            y[i] += speedY[i];
            block[i].style.top = y[i] + "px";
        }
    }
}

// setTimeout(move, 2000); // delay lại cho đỡ lag


function delay(ms){
    return new Promise(function (resolve){
        setTimeout(resolve, ms);
    });
}

function fillRect(data){
    for (let i = 0; i < numberBlock; i++){
        block[i].innerHTML = data;
    }
}

delay(1000)
    .then(
        function(){
            fillRect(3);
            return delay(1000);
        }
    )
    .then(
        function(){
            fillRect(2);
            return delay(1000);
        }
    )
    .then(
        function(){
            fillRect(1);
            return delay(1000);
        }
    )
    .then(
        function(){
            fillRect("");
            move();
        }
    );