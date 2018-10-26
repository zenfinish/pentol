var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : 'projectpair55@gmail.com', // Email Si Pengirim
        pass : 'p4k3passw0rd'  // password si pengirim
    }
  });

var mailOptions = {
    from : 'pairproject55@gmail.com', // nama email si pengirim
    to   : 'dany_arie@yahoo.com',  // tujuan kirim email ke siapa ??
    subject : 'Hi,.masa sewa kamu sudah hampir habis', // subject nya apa bro ??
    text : 'Hi pelanggan , silahkan hubungi kami untuk memperpanjang kontrak'
};

transporter.sendMail(mailOptions, function(error,info) {
    if (error) {
        console.log('error');
    } else {
        console.log('Email Sent : ' + info.response);
    }
});

//p4k3passw0rd
// projectpair@gmail.com