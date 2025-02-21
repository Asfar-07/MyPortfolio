const express=require("express")
const app=express()
require("dotenv").config()
const cors=require("cors")
const nodemailer = require('nodemailer');
app.use(express.json())
app.use("/jarvis/cdn/1.0.0/css",express.static("jarvis"))
app.use(cors({
    origin:"https://my-portfolio-frontend-07.vercel.app",
    methods:"GET,POST",
    credentials:true
        
}));
const PORT=process.env.PORT ;

// app.get("/",(req,res)=>{
//     res.send("my profile server")
// })
app.post("/Data",async(req,res)=>{
    console.log(req.body)
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // e.g., Gmail, Yahoo, etc.
            auth: {
                user: process.env.SERVER_EMAIL,
                pass: process.env.TOWSTEP_EMAIL_PASSWORD
            }
        });
        const emailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notice Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            padding: 20px;
        }

        .notice-container {
            max-width: 700px;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
            border-left: 6px solid #4CAF50;
        }

        h2 {
            text-align: center;
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
        }

        .notice-section {
            margin-bottom: 15px;
        }

        .notice-section strong {
            display: inline-block;
            width: 150px;
            font-weight: bold;
            color: #555;
        }

        .notice-section span {
            color: #333;
        }

        .message-section {
            margin-top: 20px;
        }

        .message-section strong {
            font-size: 16px;
            color: #333;
        }

        .message-section p {
            background-color: #f4f4f4;
            padding: 15px;
            border-radius: 4px;
            color: #333;
        }
    </style>
</head>
<body>

    <div class="notice-container">
        <h2>Notice</h2>
        
        <div class="notice-section">
            <strong>First Name:</strong>
            <span>${req.body.firstname}</span>
        </div>
        
        <div class="notice-section">
            <strong>Last Name:</strong>
            <span>${req.body.secondname}</span>
        </div>
        
        <div class="notice-section">
            <strong>Phone Number:</strong>
            <span>+91${req.body.phonenumber}</span>
        </div>
        
        <div class="notice-section">
            <strong>Email:</strong>
            <span>${req.body.email}</span>
        </div>
        
        <div class="message-section">
            <strong>Message:</strong>
            <p>
                ${req.body.Message} 
            </p>
        </div>
    </div>

</body>
</html>
`;
            const mailOptions = {
                from: process.env.SERVER_EMAIL,
                to: process.env.MY_EMAIL,
                subject: 'Confirm Your Email',
                html: emailTemplate
            };
            
            await transporter.sendMail(mailOptions);
            console.log('Email confirmation sent successfully');
            res.send("ok")
        } catch (error) {
            console.error('Error sending email confirmation:', error);
        }
   
})
app.listen(PORT,()=>{console.log(`${PORT} running`)})
