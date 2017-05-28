"use strict";

console.log('website js loaded');

function sendContactEmail(){
    console.log('sending email')
    $.ajax({
        url: "/contactformsubmit",
        cache: false,
        success: function(response) {
            console.log(JSON.stringify(response));
        }
});
}