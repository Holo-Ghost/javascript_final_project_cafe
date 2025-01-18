/*Name: Kayleigh Reynolds
  Assignment: Chapter 8 Case Study*/

"use strict"

$(document).ready( () => 
{
    let imageCache = [];
    $("#slides img").each( (index, img) => //for each image in slides
    {
        const image = new Image();      //create new instance of image
        image.src = $(img).attr("src");     //attribute the image to the src attribute
        image.title = $(img).attr("alt");   //title to the alt attribute 
        imageCache[index] = image;
    });

    let imageCounter = 0;
    setInterval( () =>
    {
        $("#caption").fadeOut(1000); //fades out initial caption
        $("#slide").fadeOut(1000,     //fades out initial image
            () => {
                imageCounter = (imageCounter + 1) % imageCache.length;
                const nextImage = imageCache[imageCounter];
                $("#slide").attr("src", nextImage.src).fadeIn(1000);  //how long to fade in
                $("#caption").text(nextImage.title).fadeIn(1000); // how long to fade out
            });     //end fadeOut
    }, 4000);      //end setInterval

}); //end document ready
