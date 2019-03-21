const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.send("Go to the placeholder URL");
});

router.get("ex1/:replace", (req, res)=>{
    res.render("index", {placeholder: req.params.replace});
});

router.get("/ex2/:placeholder", (req, res)=> {
    var tempPlaceholder = "";
    if(req.params.placeholder.toLowerCase() == "kenn"){
        tempPlaceholder = "Kenn";
    }
    else{
        tempPlaceholder = "That's not Kenn";
    }
    res.render("ex2", {placeholder: tempPlaceholder})
});


router.get("/ex3", (req, res)=>{
    res.send("Add two placeholders to the end of the URL");
});

router.get("/ex3/:placeholder1/:placeholder2", (req, res)=>{
    var tempAsktricks = "";
    for(var i = parseInt(req.params.placeholder1); i<=req.params.placeholder2; i++){
        tempAsktricks+= "*";
    }
    console.log(tempAsktricks);
    res.render("ex3");
});

module.exports = router;