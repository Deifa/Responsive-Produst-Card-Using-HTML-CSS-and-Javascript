let sizes = document.querySelectorAll('.size');
let colors = document.querySelectorAll('.color');
let shoes = document.querySelectorAll('.shoe');
let gradients = document.querySelectorAll('.gradient');

let prevColor = "black";

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    colors.forEach(color => color.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

    shoes.forEach(shoe => shoe.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(grad => grad.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
   
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(color => color.addEventListener('click', changeColor));