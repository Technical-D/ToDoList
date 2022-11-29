const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
console.log(date);

const app = express();
const tasks = ["BuyFood", "Cooking", "Shopping"];
const workItem =[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    
    let day = date.getDate();
    res.render("list", {
        title: day,
        tasks: tasks
    });
})

app.post("/", (req, res) => {
    let task = req.body.task;
    if(req.body.list === "Work"){
        workItem.push(task);
        res.redirect("/work");
    } else{
        tasks.push(task);
        res.redirect("/");

    }
    
})

app.get("/work", (req, res) => {
    res.render("list",{
        title: "Work",
        tasks: workItem
    } );
});
app.get("/about", (req, res) => {
    res.render("index");
})

app.listen(3000, () => {
    console.log("Server started at port 3000.");
});


