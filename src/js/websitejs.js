"use strict";

console.log('website js loaded');

function sendContactEmail(){
    console.log('sending email');
    var message = $('#message').value();
    $.ajax({
        url: "/contactformsubmit",
        type: "post",
        data: values ,
        success: function (response) {
           console.log('success'+JSON.stringify(response));
            $('#message').prop( "disabled", true );
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
}

$( document ).ready(function() {
    console.log( "ready!" );
});