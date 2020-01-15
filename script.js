function $(elem){
    return document.querySelector(elem);
}
function $All(elem){
    return document.querySelectorAll(elem);
}

var numSquares = 6;
var squares = $All('.squares');
var bottomRow = $All('.bottom-row');
var colors = generateRandomColors(squares.length);

var h1 = $('h1')

var colorToGuessDisplay = $('h1 span');
var colorToGuess = pickColor();

// Button selectors
var reset = $('#reset');
var easy = $('.easy')
var hard = $('.hard')

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
            reset.textContent = 'Play Again?'
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again'
        }
    })
}

reset.addEventListener('click', newGame);

easy.addEventListener('click', function(){
    if (!this.classList.contains('selected')){
        this.classList.toggle('selected');
        hard.classList.toggle('selected');
        for (square of bottomRow){
            square.classList.toggle('hidden');
        };
        numSquares = 3;
        newGame();
    };
});

hard.addEventListener('click', function(){
    if (!this.classList.contains('selected')){
        this.classList.toggle('selected');
        easy.classList.toggle('selected');
        for (square of bottomRow){
            square.classList.toggle('hidden');
        };
        numSquares = 6;
        newGame();
    };
});

function pickColor(){
    var pickThis = Math.floor(Math.random()*numSquares);
    return colors[pickThis];
}

function changeColors(color){
    for (const square of squares){
        square.style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function generateRandomColors(num){
    var arr = [];
    for (i = 0; i < num; i++){
        arr.push(randomRGB());
    }
    return arr;
}

function randomRGB(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function newGame(){
    h1.style.backgroundColor = 'steelblue';
    colors = generateRandomColors(numSquares);
    colorToGuess = pickColor();
    console.log(colors.indexOf(colorToGuess));
    colorToGuessDisplay.textContent = colorToGuess;
    messageDisplay.textContent = '';
    reset.textContent = 'New Colors'
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };
};
