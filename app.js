const express=require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
const { static } = require("express");
const app=express();

app.use(express.urlencoded({
  extended: true
}));


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

let items=["Cook Food","Buy Food","Eat Food"];
let workitems=[];

app.set("view engine","ejs");

app.get("/",function(req,res){
    let day=date.getdate();
  res.render("list",{ListTitle:day,newlistitems:items});
  
});
app.post("/",function(req,res){
   let item = req.body.newitem;
   if(req.body.list==="Work"){
     workitems.push(item);
     res.redirect("/Work")
   }
   else{
  items.push(item);
  res.redirect("/");
}
});
app.get("/Work",function(req,res){
  res.render("list",{ListTitle:"Work List",newlistitems:workitems})
});
app.get("/about",function(req,res){
   res.render("about");
})


app.listen(3000,function(){
  console.log("The server is currently running at port 3000");
});