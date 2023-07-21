
const knex = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { describe } = require("node:test");
const secretkey = "secretkey";


const like_post=async (req,res)=>{
    // console.log(res.tokendata.user[0].id,"scess")
    let user_id=res.tokendata.user[0].id
    console.log(typeof user_id)
    const {like,post_id} = req.body;
    try{
        const b=await knex('likes').insert({"user_id":user_id,post_id,like})
        // if(like_postikes.length > 0){
        //     let updaLike = await Likes.query().where({user_id,post_id}).patch({like})
        //     return {status:true,message:'post liked successfully...'}
        // }else{
        //     const likeData = await Likes.query().insert({post_id,user_id,like:data.like})
        //     return {status:true,message:'post liked successfully...'}
        // }
        console.log(b)
        res.send("fulscesss...")
    }catch(err){
        res.send({err})
        console.log(err)
    }
  }

//   const update_like_by_id =async(req,res)=>{
//     // console.log(update_like_by_id)
//     // const id = req.params._id
//     const {id} = req.params;
//     console.log(id)
//     const changes = req.body;
//     console.log(changes,"sdfgh")
  
  
//     try {
//       const count = await knex('likes').where({id}).update(changes);
      
//       if (count) {
        
//         res.status(200).json({updated: count})
//       } else {
//         res.status(404).json({message: "Record not found"})
//       }
//     } catch (err) {
//       res.status(500).json({message: "Error updating new post", error: err})
//     }
//   }



module.exports = {like_post,update_like_by_id };
