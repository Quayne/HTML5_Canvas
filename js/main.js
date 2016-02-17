$(document).ready(function () {
    var selectedArea;
    $("area").click(function () {
        
        //var id = $(this).attr('id');
        //remove hightlight on all areas
        highlightArea(this);
        selectedArea = this;
    });

    $("area").mouseover(function () {
        //var id = $(this).attr('id');
        $(this).toggle(function () {
            highlightArea(this);
        });
    });

    $("area").mouseout(function () {
        //var id = $(this).attr('id');

        //only remove if it is not the selectedArea
        $(this).toggle(function () {
            removeHighlight(this);
        });
    });
});

function removeHighlight(element) {
    var canvas = document.getElementById("b");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, 494, 494);
}

function highlightArea(element) {
    //var $x = "#" + id;
    var coords = $(element).prop("coords").split(",");

    var canvas =  document.getElementById("b");
    var context = canvas.getContext("2d");
    

    context.moveTo(coords[0], coords[1]);
    for (i = 2; i < coords.length; i += 2) {
        context.lineTo(coords[i], coords[i + 1]);
    }
    context.strokeStyle = "#eee";
    context.fillStyle = 'red';
    context.stroke();
    context.fill();
}