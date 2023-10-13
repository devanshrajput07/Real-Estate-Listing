const express = require("express");
const list = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

app.get('/list',(req,res)=> {
    return res.json(list);
})

app.listen(PORT,()=> console.log(`Server started at port:${PORT}`) )