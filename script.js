var clickCount = 0;

function getSize() {
    return ((Math.random() * 200) + 20);
}

function getPositionTop() {
    return (Math.random() * 400);
}

function getPositionLeft() {
    return (Math.random() * 800);
}

function getColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function getRadius() {
    var rand = Math.floor((Math.random() * 2));
    console.log(rand);
    if (rand < 1) {
        return 50;
    } else {
        return 0;
    }
}

function shapeClicked() {

    var quickest = 99 * 1000;

    var start = new Date().getTime();
    document.getElementById("shape").onclick = function() {

        var end = new Date().getTime();

        var timeTaken = end - start;

        clickCount++;

        var size = getSize();

        document.getElementById("shape").style.width = size + "px";
        document.getElementById("shape").style.height = size + "px";

        document.getElementById("shape").style.top = getPositionTop() + "px";
        document.getElementById("shape").style.left = getPositionLeft() + "px";

        document.getElementById("shape").style.backgroundColor = getColor();

        document.getElementById("shape").style.borderRadius = getRadius() + "%";

        if (quickest > timeTaken) {
            quickest = timeTaken;
            document.getElementById("timeTaken").innerHTML = quickest / 1000 + "s";
        }

        start = new Date().getTime();
    }
}

shapeClicked();