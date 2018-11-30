$(document).ready(function(){

    $("#youngMenu").on('click', function(){
        window.location = "../pages/young.html";
    });

    $("#jobsMenu").on('click', function(){
        window.location = "../pages/career.html";
    });

    $("#csContributes").on('click', function(){
        window.location = "../pages/csContributes.html";
    });

    $("#trivia").on('click', function(){
        window.location = "../pages/trivia.html";
    });

    $("#myView").on('click', function(){
        window.location = "../pages/commentsAboutElon.html";
    });

    $("#motto").on('click', function(){
        window.location = "../pages/quotes.html";
    });

    $(".left-avatar").on('click', function(){
        window.location = "../";
    })
});
