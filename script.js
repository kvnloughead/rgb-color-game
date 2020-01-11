function $(elem){
    return document.querySelector(elem);
}
function $All(elem){
    return document.querySelectorAll(elem);
}

var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)",
              "rgb(0, 0, 255)", "rgb(255, 0, 255)"]

var squares = $All('.squares')
for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}