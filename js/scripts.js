$(function () {
    $(".carousel").carousel({ interval: 2000 }); //sets carousel to change between slides at 2 seconds/2000ms
    $("#carouselButton").click(function () { //defines what happens when you click #carouselButton
        if ($("#carouselButton").children("i").hasClass("fa-pause")) { //if the carouselButton has a fa-pause class...
            $(".carousel").carousel("pause"); //Pause the Carousel
            $("#carouselButton").children("i").removeClass("fa-pause"); //Then take the fa-pause class out
            $("#carouselButton").children("i").addClass("fa-play"); //replace it with an fa-play class
        } else { //if not
            $(".carousel").carousel("cycle"); //cycle through the carousel
            $("#carouselButton").children("i").removeClass("fa-play"); //take the fa-play class out
            $("#carouselButton").children("i").addClass("fa-pause"); //replace it with an fa-pause class
        }
    });
});

$(document).ready(function () {
    $('#reserveButton').click(function () {
        $('#reserveModal').modal("show");
    });
});

$(document).ready(function () {
    $('#loginButton').click(function () {
        $('#loginModal').modal("show");
    });
});