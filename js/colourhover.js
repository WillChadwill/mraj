const hoverColors = ['#ffb3f1', '#ffd06b', '#faffb3', '#69ff63', '#acedfa', '#69ff63', '#8244bd'];
let numberOfColors = hoverColors.length;


function getRandomColor() {
	function getRandomNumber(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min
	}

	let randomNumber = getRandomNumber(0, numberOfColors);
	let randomColor = hoverColors[randomNumber];
	return randomColor;
}



document.getElementById("btn1").onmouseover = function() 
{
    this.style.backgroundColor = getRandomColor();
}

document.getElementById("btn1").onmouseleave = function() 
{
    this.style.backgroundColor = 'white';
}

document.getElementById("btn2").onmouseover = function() 
{
    this.style.backgroundColor = getRandomColor();
}

document.getElementById("btn2").onmouseleave = function() 
{
    this.style.backgroundColor = 'white';
}

document.getElementById("btn3").onmouseover = function() 
{
    this.style.backgroundColor = getRandomColor();
}

document.getElementById("btn3").onmouseleave = function() 
{
    this.style.backgroundColor = 'white';
}

document.getElementById("btn4").onmouseover = function() 
{
    this.style.backgroundColor = getRandomColor();
}

document.getElementById("btn4").onmouseleave = function() 
{
    this.style.backgroundColor = 'white';
}