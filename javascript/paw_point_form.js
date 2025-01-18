/*Name: Kayleigh Reynolds
  Assignment: Chapter 8 Case Study*/

"use strict"

$(document).ready( () =>
{
    $("#sign_up").click( () => 
    {
        //retrieving values entered by user
        const firstName = $("#first_name").val();
        const lastName = $("#last_name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();


        //reg expressions to check for patterns
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;  
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

        let isValid = true;
        if (firstName === "" || !isNaN(firstName))
        {
            isValid = false;
            window.alert("Please enter a valid first name.");
        }
        if (lastName === "" || !isNaN(lastName))
        {
            isValid = false;
            window.alert("Please enter a valid last name.");
        }
        if (email === "" || !emailPattern.test(email) )
        {
            isValid = false;
            window.alert("Please enter a valid email.");
        }
        if (phone === "" || !phonePattern.test(phone) )
        {
            isValid = false;
            window.alert("Please enter a valid phone number.");
        }
        if (isValid)
        {
            window.location.href = "jiji_submission.html";
        }
    });

    $("#first_name").focus();  
    
}); //end document ready