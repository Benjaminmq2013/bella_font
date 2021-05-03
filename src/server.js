const express = require("express")
const app = express();
const ejs = require("ejs")
const path = require("path")

// settings
app.set("port", process.env.PORT || 3000)

app.set("views", path.join(__dirname, "views"))
app.engine("html", ejs.renderFile)
app.set("view engine", "ejs")


// Routes
app.get("/", (req, res)=>{
    res.render("home.html")
})

// port

app.listen(app.get("port"), ()=>{
    console.log("Servidor escuchando en http://127.0.0.1:" + app.get("port"))
})