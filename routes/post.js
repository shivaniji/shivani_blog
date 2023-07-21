const express = require("express")
const router  = express.Router()

const {create_post, getall_post,get_post_by_id,update_post_by_id} = require("../controllers/post")
// const(getall_post)
const { verifytoken } = require("../auth/jwt")

router.post("/create_post",verifytoken,create_post)
router.get("/getall_post",verifytoken,getall_post)
router.get("/get_post_by_id/:id",verifytoken,get_post_by_id )
router.put("/update_post_by_id/:id",verifytoken,update_post_by_id)
// router.get("/create_post",verifytoken,create_post)

// router.get("/login",login)
// router.get('/logout',logout)

module.exports = router
