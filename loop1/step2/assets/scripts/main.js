$(document).ready(function() {
    // Hide all checkmarks on startup.
    // If you use hide(), the element will be removed.
    $(".check-mark").css("visibility", "hidden");

    // declare lastClicked
    let lastClicked;

    $(".card-item").click(function() {
        if (lastClicked != undefined) {
            lastClicked.css("visibility", "hidden");
        }
        checkMark = $(this).find(".check-mark");
        if (checkMark.css("visibility") === "hidden") {
            checkMark.css("visibility", "visible");
            lastClicked = checkMark;
        } else {
            checkMark.css("visibility", "hidden");
        }
    });
});
