import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url"; 

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
    
app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/index.html");
    // console.log(req.rawHeaders);
    res.send("<h1>This is my first webpage</h1>")

});
app.post("/register", (req,res) => {
    // res.send("welcome to the contact page") 
    res.sendStatus(201)
});
app.put("/user/sam", (req,res) => {
    // res.send("welcome to the contact page") 
    res.sendStatus(200)
});
app.patch("/user/sam", (req,res) => {
    // res.send("welcome to the contact page") 
    res.sendStatus(200)
});
app.delete("/user/sam", (req,res) => {
    // res.send("welcome to the contact page") 
    res.sendStatus(200)
});




app.listen(port, () => {
    console.log(`currently listening from port ${port}`);
});