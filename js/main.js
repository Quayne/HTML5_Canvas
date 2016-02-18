$(document).ready(function () {
    var area = [];
    var selectedArea;
    var description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

    //Needs to handle mouseout so that highlighted area doesn't go away after been clicked
    $("area").click(function () {
        //remove hightlight on all areas
        highlightArea(this);
        selectedArea = this;

        if (area.indexOf(selectedArea) == -1) {
            area.push(selectedArea);
            $("h2").text($(this).attr("title"));
            $("h3").text($(this).data("population"));
            $("p").text(description);
            $("h2,h3,p").show("fast");
        }
        else if (area.indexOf(selectedArea) != -1) {
            area.pop(selectedArea);
            removeHighlight(this);
            $("h2,h3,p").hide("fast");
        }      
    });

    $("area").mouseover(function () {
        highlightArea(this);
    });


    //
    $("area").mouseout(function () {
        if (selectedArea != this) {
            removeHighlight(this);
        }
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