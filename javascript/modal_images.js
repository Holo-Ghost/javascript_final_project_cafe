/*Name: Kayleigh Reynolds
  Assignment: Chapter 8 Case Study*/

"use strict"

    var modal = document.getElementById("cat_modal"); //getting modal box

    var img = document.querySelectorAll(".gallery img"); //getting image
    var modalImg = document.getElementById("img1");   //inserting image into the modal
    var caption = document.getElementById("cat_modal_caption");     //getting caption text

    img.forEach((imgA) => //for each image in the gallery
    {
        imgA.onclick = function() 
        {  //when an image is clicked
            modal.style.display = "block";  //display the modal
            modalImg.src = this.src;
            caption.innerHTML = this.alt;
        }
    }); 

var span = document.getElementsByClassName("cat_modal_close")[0];

span.onclick = function() 
{     //when the "x" in the modal is clicked, hide the modal
    modal.style.display = "none";
}

