/*Name: Kayleigh Reynolds
  Assignment: Chapter 8 Case Study*/

"use strict";

const getSelectedItem = src =>   //accepts image source as argument
{
    let selected = [];   //creates empty array that will hold item values

    switch (src)
    {
        case "../images/espresso.jpg":
            selected = ["espresso", 1.95, "Espresso"];
            break;
        case "../images/latte.jpg":
            selected = ["latte", 2.95, "Latte"];
            break;
        case "../images/cappuccino.jpg":
            selected = ["cappuccino", 3.45, "Cappuccino"];
            break;
        case "../images/coffee.jpg":
            selected = ["coffee", 1.75, "Coffee"];
            break;
        case "../images/biscotti.jpg":
            selected = ["biscotti", 1.95, "Biscotti"];
            break;
        case "../images/scone.jpg":
            selected = ["scone", 2.95, "Scone"];
            break;
    }
    return selected;
};

//readying the document
$(document).ready(() =>
{
    let total = 0;
    //processing each image on the page
    $("ul img").each( (index, img) =>
    {
        const oldPic = $(img).attr("src");      //gets the source of the first image
        const newPic = $(img).attr("id");       //gets the source of the rollover image

        //preload rollover image
        const rolloverPic = new Image();
        rolloverPic.src = newPic;

        $(img).hover 
        (
            () => $(img).attr("src", newPic),
            () => $(img).attr("src", oldPic)
        );
   

        $(img).click( evt =>
        {
            const selected = getSelectedItem(oldPic);

            let order = $("#order").html();
            if (order == undefined)
            {
                order = "";
            }

            total = total + selected[1];
            order += `<option value="${selected[0]}">$${selected[1]} - ${selected[2]}</option>`;

            $("#order").html(order);
            $("#total").text(`Total: $${total.toFixed(2)}`);
        }); //end click
    }); //end each
    
    $("#place_order").click( () =>         //user clicks on place order button
    {
        window.location.href = "jiji_checkout.html";
    }); //end place order click event

    $("#clear_order").click( () =>      //user clicks on clear order button
    {
        $("#order").text("");
        $("#total").text("");
        total = 0;                      //clears the accumulated value of the total
    });  //end clear order click event
}); //end ready