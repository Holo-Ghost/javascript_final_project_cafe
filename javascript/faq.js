/*Name: Kayleigh Reynolds
  Assignment: Chapter 8 Case Study*/

"use strict"

$(document).ready( () => 
{
    $("#first_half h3").click( evt =>   //when user clicks on an h3 heading
    {
        const h3 = evt.currentTarget;

        $(h3).toggleClass("minus");  //setting class of h3 header to minus
        
        if ($(h3).attr("class") != "minus")
        {
            $(h3).next().slideUp(1500, "easeInExpo");
        }
        else
        {
            $(h3).next().slideDown(1000, "easeOutBounce");
        }
    });  //end click event

});  //end document ready

    