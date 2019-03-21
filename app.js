const express = require("express");
const index = require("./routes/index");
const app = express();
const port = 8000;

app.use(express.static("public"));
app.set("view engine", "pug");
app.use("/", index);


app.listen(port, ()=>{
    console.log("Listening on port "+ port)
});