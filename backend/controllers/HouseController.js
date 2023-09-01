
const Home = require('../Modals/House')


const GetHomes = (req, res) => {
   
Home.find({})
.then(data=>{
    res.json({data:data})
})
.catch(err=>{
    console.log(err)
})
}

const AddHome = (req, res) => {

console.log(req.user,"user")
    Home.create(req.body)
        .then(data => {
            res.json({ message: "added", data: data })
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })

}
const UpdateHome = (req, res) => {

    let House =  Home.findById(req.query.id)
   console.log(req.query.id)
    if(!House){
        return res.json({
            sucesss:false,
            message:"Home not found"
        })
    }

     Home.findByIdAndUpdate(req.query.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false

    })
    .then(updatedHome => {
        res.json({ message: "Home updated", data: updatedHome });
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    });
  
};
const DeleteHome = (req, res) => {
    const HomeId = req.query.id;

    Home.findByIdAndDelete(HomeId)
        .then(() => {
            res.json({ message: "Home deleted" });
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        }); 
};





module.exports = { GetHomes, AddHome ,UpdateHome,DeleteHome}