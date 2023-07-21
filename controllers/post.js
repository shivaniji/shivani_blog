
const knex = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { describe } = require("node:test");
const secretkey = "secretkey";





const create_post=async (req,res)=>{
  // console.log(res.tokendata.user[0].id,"scess")
  let user_id=res.tokendata.user[0].id
  const {title,desription} = req.body;
  try{
      const b=await knex('post').insert({"title":title,"desription":desription,"user_id":user_id})
      console.log(b)
      res.send("fulscesss...")
  }catch(err){
      res.send({err})
      console.log(err)
  }
}

// console.log(res)


const getall_post=async(req,res)=>{
  // console.log(getall_post)
  try{
    const a=await knex('post').select("*")
    console.log(a)
    res.send(a)
  }
  catch(err){
    res.send(err)
    console.log(err)

}

}





const get_post_by_id = async (req, res) => {
  const id = req.params.id

  try {
      const a = await
          knex('post').select('*')
              .where('id', id)
      if (a.length > 0) {
        return res.send(a)

      // res.send(a)

      }
      res.send({error:true,message:"id is not fount"})
      


  } catch (err) {
      res.send({ err })

  }

}

const update_post_by_id =async(req,res)=>{
  // const id = req.params._id
  const {id} = req.params;
  const changes = req.body;


  try {
    const count = await knex('post').where({id}).update(changes);
    if (count) {
      
      res.status(200).json({updated: count})
    } else {
      res.status(404).json({message: "Record not found"})
    }
  } catch (err) {
    res.status(500).json({message: "Error updating new post", error: err})
  }
}





// function verifytoken(req,res,next){
//   const bearerHeader =req.Headers['Authorization'];
//   if(typeof bearerHeader !== 'undefined'){

//   }else{
//       res.sent({
//           result:"token id"
//       })
//   }

// }





module.exports = {create_post,getall_post,get_post_by_id,update_post_by_id};
