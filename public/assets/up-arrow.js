document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("demo").style.color = "white";
}

function mouseOut() {
    document.getElementById("demo").style.color = "black";
}
