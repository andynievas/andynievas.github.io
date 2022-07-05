
const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

// config
app.set('views', './views');
app.set("view engine", "ejs");
// app.set("public","./public");
app.use(express.static("./public"));

// ejs
// cors


// Routes
app.get("/", (req, res) => {
    return res.render("index");
});

// app.get("/");

// app.get("/");

// app.get("/");

// app.get("/");


app.listen(port, () => {
    console.log("Server running on port", port);
});
