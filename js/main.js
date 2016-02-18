$(document).ready(function () {
    //var area = [];
    var selectedArea;    

    //Needs to handle mouseout so that highlighted area doesn't go away after been clicked
    $("area").click(function () {

        if (this == selectedArea) {
            selectedArea = null;
            removeHighlight();
            $("h2,h3,p").hide("fast");
        }
        else {
            removeHighlight();
            highlightArea(this, "yellow");
            selectedArea = this;
            $("h2").text($(this).attr("title"));
            $("h3").text($(this).data("population"));
            $("p").text($(this).data("description"));
            $("h2,h3,p").show("fast");
        }       
    });

    $("area").mouseover(function () {
        highlightArea(this, "red");
    });

    $("area").mouseout(function () {
        removeHighlight();
        if(selectedArea != null)
            highlightArea(selectedArea, "yellow");
    });
});


//Clear highlighted area
function removeHighlight() {
    var canvas = document.getElementById("b");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, 494, 494);
}

//Highlight area
function highlightArea(element, color ) {
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
    context.fillStyle = color;
    context.stroke();
    context.fill();
}