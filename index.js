require("dotenv").config()
const exprss = require("express");
const cors = require("cors")

const app = exprss();
const port  = process.env.PORT || 4000

app.use(cors());
app.use(exprss.json())

app.get("/" , (req , res)=>{
    res.send("Uber backend project")
})

app.listen(port , ()=>{
    console.log(`SERVER IS port is runing on ${port}`)
})