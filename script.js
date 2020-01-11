function $(elem){
    return document.querySelector(elem);
}
function $All(elem){
    return document.querySelectorAll(elem);
}

var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)",
              "rgb(0, 0, 255)", "rgb(255, 0, 255)"]

var squares = $All('.squares');
var colorToGuess = colors[3];
var colorToGuessDisplay = $('h1 span');
var messageDisplay = $('#message');

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function(){
        // get color of clicked square
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === colorToGuess){
            for (const square of squares){
                square.style.backgroundColor = colorToGuess;
            }
            messageDisplay.textContent = 'Correct!';
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again'
        }
    })
}

colorToGuessDisplay.textContent = colorToGuess;