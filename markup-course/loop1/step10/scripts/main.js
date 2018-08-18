$(document).ready(function() {
    $('.learn-more-container').hover(function() {
        $('.learn-more-line').toggleClass("line-extend");
        $('.learn-more-container').toggleClass("container-extend");
    });
});
