"use strict";

console.log('website js loaded');

function sendContactEmail(){
    console.log('sending email');
    var message = $('#message').val();
    $.ajax({
        url: "/contactformsubmit",
        type: "post",
        data: message ,
        success: function (response) {
           console.log('success'+JSON.stringify(response));
            $('#message').prop( "disabled", true );
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
}