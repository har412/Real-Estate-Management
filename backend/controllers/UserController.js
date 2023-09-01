const User = require('../Modals/User')

const Register = async (req,res)=>{
    const { username, password } = req.body;
    console.log(username)
    try {
      // Check if username already exists
      const existingUser = await User.findOne({ username: username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists.' });
      }
  
      // Create a new user
      await User.create({
        username: username,
        password: password 
      });
  
      res.status(200).json({ message: 'User registered successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while registering the user.' });
    }
}

const getUser = async (req,res)=>{
  console.log(req?.user)
   res.send(req?.user)
}

const Logout =  async (req,res)=>{
  req.logout(()=>{
    res.status(200).json({message:"success"})
  })
}



module.exports ={Register,getUser,Logout}