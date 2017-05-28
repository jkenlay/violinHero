/* eslint no-console: 0 */

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
        type: 'OAuth2',
        user: 'jackkenlay@gmail.com',
        clientId: '218463359700-4ct8hduunfj1dusnslh9gsesqk936k44.apps.googleusercontent.com',
        clientSecret: 'WrC3rWZhLbyKhcpkKBxc6dhn',
        refreshToken: '1/VJVvKRYio_WkKp3Lci8w8zlAW2ljjhVrG30KLiEUNIM',
        accessToken: 'ya29.GltYBJ4_Q4SL0MkEVP3NfE34Xmc28QK3ViQwc-X99TEq8ZuHBWVqxFi8oLfaJqRBbW4DW9dKV44ncPS209JYkb9M1pA2rV6mLpk_szCPYjVz6YCU9YQ7SJYsbuya',
  },
});

var message = {
    from: 'Jack Kenlay <jackkenlay@gmail.com>',
    to: 'jackkenlay@gmail.com',
    subject: 'Nodemailer test',
    text: 'Hello World!!'
}

exports.sendEmail = transporter.sendMail(message, (error, info) => {
    if (error) {
        console.log('Email Error occurred');
        console.log(error.message);
    }
    // console.log('Message sent successfully!');
    // console.log('Server responded with "%s"', info.response);
    //transporter.close();
});