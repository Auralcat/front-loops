$(document).ready(function() {
    // Hide all checkmarks on startup.
    // If you use hide(), the element will be removed.
    $(".check-mark").css("visibility", "hidden");
    $(".card-item").click(function() {
        checkMark = $(this).find(".check-mark");
        if (checkMark.css("visibility") === "hidden") {
            checkMark.css("visibility", "visible");
        } else {
            checkMark.css("visibility", "hidden");
        }
    });
});
