$(document).ready(function () {
    var area = [];
    var selectedArea;
    var description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    //var hamiltonAreas = { }

    //Needs to handle mouseout so that highlighted area doesn't go away after been clicked
    $("area").click(function () {
        //var id = $(this).attr('id');
        //remove hightlight on all areas
        highlightArea(this);
        selectedArea = this;

        //for (var i = -1; i < area.length; i++) {
        //    if (selectedArea != area[i + 1]) {
        //        area.push(selectedArea);
        //        i += 1;
        //    }
        //}
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