$(function() { 
    $( "#accordion" ).accordion();  
 }); 


 // voor iedere video een pauzeer/play en rewind knop

 $("video").each(function () {


    var player = videojs(this.id, {
        //  autoplay: 'muted',
        //  loop: true
    });

    $("button#rewind").click(function () {
        player.currentTime(-10);
    });

    let geklikt = false;

    $("button#toggle").click(function () {
        //ik ga ervan uit dat de video autoplayt en dat de klik dus pause wordt//
        if (!geklikt) {
            player.pause();
            geklikt = true;
        } else {
            player.play();
            geklikt = false;
        }
    });


});


// js voor popup en viewed box wanneer de video bekeken is


$("video").each(function () {

    var modal = document.querySelector(".modal");
    var $checkVideo = $(this).parents(".video-wrapper").find(".checkVideo");

    var closeButton = document.querySelector(".close-button");
    var viewed = false;

    $checkVideo.click(function () {
        if (!viewed) {
            $(this).parents(".slide").find(".viewed").show()
            viewed = true;

        } else {
            $(this).parents(".slide").find(".viewed").hide()
            viewed = false;
        }
    });

