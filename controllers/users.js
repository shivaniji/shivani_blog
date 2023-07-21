const knex = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretkey = "secretkey";


// SignUp API

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   //Insert a record in the "blog_app" table:
// //   var sql = "INSERT INTO DATABASE (Id, Name, Surname, Email) VALUES ('2', 'shivani', 'gorakhiya', 'shivani6263@gmail.org')";
// //   connection.query(sql, function (err, result) {
// //     if (err) throw err;
// //     console.log("1 record inserted");
// //   });
  
// });


signup = (req, res) => {

  const bodydata = req.body;

  const {email,password,first_name,last_name} = req.body
  if (email==undefined || email==null || password==undefined || password==null || first_name==undefined || first_name==null || last_name==undefined || last_name==null){
    // const users= {
    //   email: "rani21navgurukul.org",
    //   password: "ashama@543",
      
    // };

    res.send({
      status: "error",
      message: "body data is empty"
    })
  }
  knex("users")
    .insert(bodydata)
    .then((data) => {
      res.send({
        status: "success",
        message: "signup successfully...",
        user: bodydata,
      });
    })
  
    .catch((err) => {

  
        res.send(err.message);
      
    });


};

// // Login API

// login = (req,res)=>{
//   const bodydata=req.body;

login= async (req, res) => {
  const {email,password} = req.body
  console.log(email,"asdfg")

  try {
  
    
      const user = await knex('users').where({ email: email }).select("*")
      if(user.length==0){
        return res.send ({

          status: "error",
          message: "user not registered"
        })
      }
      console.log(user)
      if(email==user[0].email && password == user[0].password){
        console.log()

      }
      console.log(user)

      jwt.sign({ user }, secretkey,  (err, token) => {
        res.cookie("JWT_TOKEN", token);
        console.log(token)
        res.json({
            token
        })

    })
      // res.send(a)

  } catch (err) {
    console.log(err)
      res.send({ err })

      // console.log(err)
      
  }
  

// }

// login = (req,res)=>{
//   const bodydata=req.body;


}

module.exports = { signup ,login };
