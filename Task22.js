let inputElement = document.querySelectorAll('input');
document.querySelector('body').style.backgroundColor = `black`;
document.querySelector('p').innerHTML = 'rgb(0,0,0)'

inputElement.forEach(
    function(input) {
        input.addEventListener('input',(event) => {
            let inputElement1 = document.querySelector('.input-1').value;
            let inputElement2 = document.querySelector('.input-2').value;
            let inputElement3 = document.querySelector('.input-3').value;

            document.querySelector('p').innerHTML = document.querySelector('body').style.backgroundColor = `rgb(${inputElement1},${inputElement2},${inputElement3})`;
        })
    }
)