const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.static(__dirname));
app.get("/", (req, res)=>{
    res.send("Backend is working")});
app.get("/projects",(req, res)=>{
    res.json([ {
        title:"Study Mate",
        description:"Generates answers from pdf"
    },

    ]);
});
app.listen(3000, ()=> {
    console.log("Server running on http://localhost:3000");
});