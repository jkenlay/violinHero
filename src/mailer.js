/* eslint no-console: 0 */
/*
'use strict';
const nodemailer = require('nodemailer');


// Create a SMTP transporter object
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        user: 'mail',
        clientId: '218463359700-4ct8hduunfj1dusnslh9gsesqk936k44.apps.googleusercontent.com',
        clientSecret: 'WrC3rWZhLbyKhcpkKBxc6dhn',
        refreshToken: '1/VJVvKRYio_WkKp3Lci8w8zlAW2ljjhVrG30KLiEUNIM',
        accessToken: 'ya29.GltYBJ4_Q4SL0MkEVP3NfE34Xmc28QK3ViQwc-X99TEq8ZuHBWVqxFi8oLfaJqRBbW4DW9dKV44ncPS209JYkb9M1pA2rV6mLpk_szCPYjVz6YCU9YQ7SJYsbuya',
        expires: 12345
    }
});*/

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'jackkenlay@gmail.com',
            clientId: '218463359700-4ct8hduunfj1dusnslh9gsesqk936k44.apps.googleusercontent.com',
            clientSecret: 'WrC3rWZhLbyKhcpkKBxc6dhn',
            refreshToken: '1/VJVvKRYio_WkKp3Lci8w8zlAW2ljjhVrG30KLiEUNIM'
        })
    }
})

var message = {
    from: 'My Name <jackkenlay@gmail.com>',
    to: 'jackkenlay@gmail.com',
    subject: 'Nodemailer test',
    text: 'Hello World!!'
}

// transporter.sendMail(mailOptions, function (err, res) {
//     if(err){
//         console.log('Error');
//     } else {
//         console.log('Email Sent');
//     }
// });

transporter.sendMail(message, (error, info) => {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
    transporter.close();
});