"use strict";

function sendContactEmail(){
    var name = $('#name').val();
    var message = $('#message').val();
    var sendersEmail = $('#email').val();
    var subject = $('#subject').val();
    var contactMessage = {
        name:name,
        message:message,
        sendersEmail:sendersEmail,
        subject:subject,
    }
    $.ajax({
        url: "/contactformsubmit",
        type: "post",
        data: message ,
        success: function (response) {
            $('#submitButton').text('Sent!');
            $('#message').prop( "disabled", true );
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
}