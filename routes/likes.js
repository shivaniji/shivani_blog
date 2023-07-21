const express = require("express")
const router  = express.Router()

const {like_post,update_like_by_id} = require("../controllers/likes")
const { verifytoken } = require("../auth/jwt")

router.post("/like_post",verifytoken,like_post)
router.put("/update_like_by_id/:id",verifytoken,update_like_by_id)
// router.get("/login",login)
// router.get('/logout',logout)

module.exports = router