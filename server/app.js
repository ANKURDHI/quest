const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
// const { response } = require('express');
dotenv.config();

const dbSerivce = require('./dbService');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));





//read
app.get('/getAll', (request, response) => {
    const db = dbSerivce.getDbServiceInstance();

    const result = db.getAllData();



    result

        .then(data => response.json({ data: data }))

        .catch(err => console.log(err));





})

//for blog
app.get('/getAll1', (request, response) => {
    const db = dbSerivce.getDbServiceInstance();

    const result = db.getAllData2();



    result

        .then(data2 => response.json({ data: data2 }))

        .catch(err => console.log(err));





})


// authentication
app.get('/getAll3', (request, response) => {
    const db = dbSerivce.getDbServiceInstance();

    const result = db.getAllData3();



    result

        .then(data => response.json({ data: data }))

        .catch(err => console.log(err));





})






// create questions
app.post('/insert', (request, response) => {
    const { name } = request.body;
    const { question } = request.body;

    const db = dbSerivce.getDbServiceInstance();

    const result = db.insertNewName(name, question);
    // const result = db.insertNewName(question);

    result
        .then(data => response.json({ data: data }))
        .catch(err => console.log(err));
});



// create blog
app.post('/insert2', (request, response) => {
    const { name } = request.body;
    const { blog } = request.body;

    const db = dbSerivce.getDbServiceInstance();

    const result = db.insertNewBlog(name, blog);
    // const result = db.insertNewName(question);

    result
        .then(data => response.json({ data: data }))
        .catch(err => console.log(err));
});

app.post('/mail', (request, response) => {
    const { firstName } = request.body;
    const { lastName } = request.body;
    const { subject } = request.body;
    const { email } = request.body;
    const { contentMail } = request.body;

    


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MAIL,
		pass: process.env.MAILPASSWORD
	}
});

let mailDetails = {
	from: process.env.MAIL,
	to: email,
	subject: subject,
	text: contentMail
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs');
	} else {
		console.log('Email sent successfully');
	}
});

});

app.listen(process.env.PORT, () => console.log('app is running'));