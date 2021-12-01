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
                const query = "SELECT * FROM ques;";
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
                const query = "SELECT * FROM blog;";
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

// insert
async insertNewName(question) {
    try {
       let username="Joe";
       
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

}

module.exports = DbService;