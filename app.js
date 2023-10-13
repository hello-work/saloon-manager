const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "config", ".env") });
const express = require('express')
const app = express()

app.use(express.json());

const port = 4000

// add the error handling middleware
app.use((err,req,res,next)=>{
    return res.status(500).send({ errors: [{ message: err.message }] });
})

app.listen(port, ()=>{
    console.log(`App stared successfully on ${port}`);
})
