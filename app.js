const express = require("express");
const path = require("path")
const bodyParser = require('body-parser');

app = express()



app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
   
})


app.post("/answer",(req,res)=> {
    if (req.body.answer == 10) {
        res.send("<h1>Dobrze!</h1>")
    } else {
        res.send("<h1>Źle!</h1>")
    }

    console.log(req.body.answer)
    
})


app.listen(3000)

