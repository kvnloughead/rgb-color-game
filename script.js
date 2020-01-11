function $(elem){
    return document.querySelector(elem);
}
function $All(elem){
    return document.querySelectorAll(elem);
}

var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)",
              "rgb(0, 0, 255)", "rgb(255, 0, 255)"]

var h1 = $('h1')
var squares = $All('.squares');
var colorToGuessDisplay = $('h1 span');
var colorToGuess = pickColor();

function pickColor(){
    var pickThis = Math.floor(Math.random()*colors.length);
    return colors[pickThis];
}

colorToGuessDisplay.textContent = colorToGuess;
var messageDisplay = $('#message');

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function(){
        // get color of clicked square
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === colorToGuess){
            changeColors(clickedColor)
            messageDisplay.textContent = 'Correct!';
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again'
        }
    })
}

function changeColors(color){
    for (const square of squares){
        square.style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

