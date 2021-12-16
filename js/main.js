const result = document.getElementById('result');
const submit = document.getElementById('submit');

function binary(e) {
    e.preventDefault();

    const number = document.getElementById('number').value;
    console.log(typeof Number(number));

    if (number === '') {
        alert('Please enter a number');
    } else if (number < 0) {
        alert('Please enter a positive number');
    } else {
        result.style.visibility = 'visible'
    }

    let binaryNumber = Number(number).toString(2);
    result.innerText = binaryNumber;

}

submit.addEventListener('click', binary);