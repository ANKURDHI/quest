const mysql = require ('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    // console.log('db '+connection.state);
})



class DbService{
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
 
    }
    async getAllData(){
        try{
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM ques ;";
                connection.query(query,(err,results)=>{
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
        return response ;

        }catch(error){
            console.log(error);
        }
    }

    async getAllData2(){
        try{
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM post ;";
                connection.query(query,(err,results)=>{
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
        return response ;

        }catch(error){
            console.log(error);
        }
    }



// authentication data
async getAllData3(){
    try{
        const response = await new Promise((resolve,reject)=>{
            const query = "SELECT * FROM users;";
            connection.query(query,(err,results)=>{
                if(err) reject(new Error(err.message));
                resolve(results);
            })
        });
        // console.log(response);
    return response ;

    }catch(error){
        console.log(error);
    }
}

async getAllBlog(){
    try{
        const response = await new Promise((resolve,reject)=>{
            const query = "SELECT * FROM blog ;";
            connection.query(query,(err,results)=>{
                if(err) reject(new Error(err.message));
                resolve(results);
            })
        });
        // console.log(response);
    return response ;

    }catch(error){
        console.log(error);
    }
}



// insert question
async insertNewName(username , question) {
    try {
       
       
        const insertId = await new Promise((resolve, reject) => {
            const query = "INSERT INTO ques(username, question) VALUES (?,?);";
            
            connection.query(query, [username, question] , (err, result) => {
                
                if (err) reject(new Error(err.message));
                resolve(result);
            })
        });
        return {
            // id : insertId,
           username : username,
            question : question
        };
    } catch (error) {
        console.log(error);
    }
}

// insert new user
async insertNewUser(username, passwords,email,phoneNumber,adddress) {
    try {
       
       
        const insertId = await new Promise((resolve, reject) => {
            const query = "INSERT INTO users(username, passwords,phoneNumber,adddress,email) VALUES (?,?,?,?,?);";
            
            connection.query(query, [username, passwords,phoneNumber,adddress,email] , (err, result) => {
                
                if (err) reject(new Error(err.message));
                resolve(result);
            })
        });
        return {
            // id : insertId,
           username : username,
            password : passwords,
            phoneNumber: phoneNumber,
            adddress: adddress,
            email: email

        };
    } catch (error) {
        console.log(error);
    }
}

// insert blog
async insertNewBlog(username , blogs) {
    try {
       
       
        const insertId = await new Promise((resolve, reject) => {
            const query = "INSERT INTO blog(username, blogs) VALUES (?,?);";
            
            connection.query(query, [username, blogs] , (err, result) => {
                
                if (err) reject(new Error(err.message));
                resolve(result);
            })
        });
        return {
            // id : insertId,
           username : username,
            blogs : blogs
        };
    } catch (error) {
        console.log(error);
    }
}
// insert image post
async insertNewPost(username , post) {
    try {
       
       
        const insertId = await new Promise((resolve, reject) => {
            const query = "INSERT INTO post(username, post) VALUES (?,?);";
            
            connection.query(query, [username, post] , (err, result) => {
                
                if (err) reject(new Error(err.message));
                resolve(result);
            })
        });
        return {
            
           username : username,
            post : post
        };
    } catch (error) {
        console.log(error);
    }
}
//update profile photo
async insertUpdate(username , profilePicture) {
    try {
       
       
        const insertId = await new Promise((resolve, reject) => {
            const query = `update users set image = '${profilePicture}' where username='${username}';`;
            console.log(query);
            connection.query(query, (err, result) => {
                
                if (err) reject(new Error(err.message));
                resolve(result);
            })
        });
        return {
            
           username : username,
            profilePicture : profilePicture
        };
    } catch (error) {
        console.log(error);
    }
}

}

module.exports = DbService;