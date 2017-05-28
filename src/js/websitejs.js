"use strict";

console.log('website js loaded');

function sendContactEmail(){
    console.log('sending email');
    var value = 'hello';
    $.ajax({
        url: "/contactformsubmit",
        type: "post",
        data: values ,
        success: function (response) {
           console.log('success'+JSON.stringify(response));
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
}