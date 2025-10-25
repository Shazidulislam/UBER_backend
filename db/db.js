// fourth page

const mongoose = require("mongoose");

function connectTobd(){
    mongoose.connect(process.env.MONGO_URI ).then(()=>{
         console.log("Connect to DB")
    }).catch(err=>console.log(err))
}

module.exports = connectTobd;