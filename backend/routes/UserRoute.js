const express = require('express')
const { Register ,getUser, Logout} = require('../controllers/UserController')
const passport = require('passport')
const router = express.Router()

router.route('/create').post(Register)
router.route('/').get(getUser)
router.route('/logout').get(Logout)
router.route('/login').post( passport.authenticate('local'),(req,res)=>{
  res.status(200).json({"message":"success"})
})




module.exports = router