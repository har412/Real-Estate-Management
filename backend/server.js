const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const cors = require('cors')
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(express.urlencoded({extended:false}))
try {
    mongoose.connect('mongodb://localhost:27017/tanvini')
    .then(data=>{
        console.log("Db connected")
    })
    .catch(err=>{
        console.log(err)
    })
    
} catch (error) {
    console.log("error in data base connection",error)
}





const User = require('./Modals/User')
const passport = require('passport')
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy
app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
  }))
  app.use(passport.initialize()) 
  app.use(passport.session())    
 
 const authUser = (username, password, done) => {
    //Search the user, password in the DB to authenticate the user
    // console.log(username)
    User.findOne({username:username})
        .then(user=>{
            if (!user) return done(null, false, { message: 'Incorrect username.' });
            if (user.password !== password) return done(null, false, { message: 'Incorrect password.' });
            return done (null, user )
        })
        .catch(err=>{
            return done(err)
        })
        
    }
    passport.use(new LocalStrategy (authUser))
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done) => {
        User.findById(id)
          .then(user => {
            done(null, user);
          })
          .catch(err => {
            done(err, null);
          });
      });
      

      const UserRouter = require('./routes/UserRoute')
      const HomeRouter = require('./routes/HomeRoute')

      app.use('/user',UserRouter)
      app.use('/houses',HomeRouter)
      


app.listen(8000,()=>{
    console.log("backend running at http://localhost:8000")
})