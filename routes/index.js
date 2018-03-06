var express = require('express');
var nodemailer = require('nodemailer');
var sendmail = require('sendmail');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendEmail', function(req,res){
    var body = req.body;
    console.log(body);
    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: "allans-cider-no-reply@outlook.com",
            pass: "Allanscider"
        }
    });

    var message = body.Message;
    if(body.Phone !== ""){
        message += '\n Phone Number: ' + body.Phone;
    }

    if(body.Email !== ""){
        message += '\n Email Address: ' + body.Email;
    }

    var mailOptions = {
        from: 'allans-cider-no-reply@outlook.com',
        to: 'info@cornishcidergarden.co.uk',
        subject: body.Name + ' has sent you a message on Allanscider.com!',
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        console.log(error);
        if (error) {
            res.send(error);
        } else {
            res.send('sent');
        }
    });
});

module.exports = router;
