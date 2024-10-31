// coding implementation
// end coding implementation\
const submitBtn = document.querySelector("form");
submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    const priceFrom = e.target.from.value;
    const priceTo = e.target['to'].value;
    const keyword = e.target.key.value;
    const num1 = parseFloat(priceFrom);
    const num2 = parseFloat(priceTo);
    console.log(priceFrom, priceTo, keyword);
    if (priceFrom === '' || !keyword || priceTo === '') {
        alert('fill all fields');
    }
    else if (isNaN(num1) || isNaN(num2)) {
        alert('price must be a number');
    } else if (num1 > num2) {
        alert('from price must be lower than to price');
    } else if (num1 < 0 || num2 < 0) {
        alert('from price must be greater than 0');
    }
})

console.log('check');