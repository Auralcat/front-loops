$(document).ready(function() {
    // Hide all checkmarks on startup.
    // If you use hide(), the element will be removed.
    $(".check-mark").css("visibility", "hidden");

    // declare lastClicked
    let lastClicked;
    let lastCard;

    $(".card-item").click(function() {
        if (lastClicked != undefined) {
            lastClicked.css("visibility", "hidden");
            lastCard.css("color", "#aaa");
        }
        checkMark = $(this).find(".check-mark");
        cardName = $(this).find(".card-name");

        if (checkMark.css("visibility") === "hidden") {
            checkMark.css("visibility", "visible");
            cardName.css("color", "#000");

            lastClicked = checkMark;
            lastCard = cardName;
        } else {
            checkMark.css("visibility", "hidden");
        }
    });
});
