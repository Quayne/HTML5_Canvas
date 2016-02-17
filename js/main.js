$(document).ready(function () {

    var selectedArea;
    //$("area").click(function () {

    //    //var id = $(this).attr('id');
    //    //remove hightlight on all areas
    //    highlightArea(this);
    //    selectedArea = this;
    //});

    $("area").mouseover(function () {
        highlightArea(this);
    });

    $("area").mouseout(function () {
        removeHighlight(this);
    });
});


//Clear highlighted area
function removeHighlight(element) {
    var canvas = document.getElementById("b");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, 494, 494);
}

//Highlight area
function highlightArea(element) {
    var coords = $(element).prop("coords").split(",");
    var canvas = document.getElementById("b");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(coords[0], coords[1]);
    for (i = 2; i < coords.length; i += 2) {
        context.lineTo(coords[i], coords[i + 1]);
    }
    context.closePath();
    context.strokeStyle = "#eee";
    context.fillStyle = 'red';
    context.stroke();
    context.fill();
}