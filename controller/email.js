const nodemailer = require("nodemailer");

function userLoginEmail(email, message, name, subject) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yusufedun19@gmail.com",
      pass: "adbclxlaxqsmswjl",
    },
  });

  let mailOptions = {
    from: { name: name, address: email }, // Use the user's email here
    to: 'yusufedun19@gmail.com',
    subject: subject,
    html:`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Voldemart</title>
        <script src="https://kit.fontawesome.com/6ce55e9e9c.js" crossorigin="anonymous"></script>
    </head>
    
    <body>
        <div class="container" style="  background-color: rgb(44, 38, 38);
        padding: 10px 0 10px 0;
        display: flex;
        justify-content: center;
        align-content: center;">
            <div class="card" style="  background-color: blueviolet;
            width: 400px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
            border-radius: 12px;
            text-align: center;">
                <div class="card-body">
                   ${message}
                </div>
            </div>
        </div>
    </body>
    
    </html>`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent from: " + email + " to yusufedun19@gmail.com");
    }
  });
}

module.exports = userLoginEmail;
