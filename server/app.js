const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
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






// create
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




app.listen(process.env.PORT, () => console.log('app is running'));