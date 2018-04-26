$(document).ready(function() {
    // Hide all checkmarks on startup
    $(".check-mark").hide();
    $(".card-item").click(function() {
        $(this).find(".check-mark").toggle();
    });
});
