const express = require("express");
const path = require('path');
//const router = express.Router();
const app = express();
const productos = require("./routes/productosRoutes");

// Settings
app.set("PORT", process.env.PORT || 8080);

// Middleware o validacion

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname + "public")));
app.use('/productos', productos.router);
app.use('/carrito', require("./routes/carritoRoutes"));

// default

app.get("/", (req, res)=> {
    res.send("Carlos Ruiz");
})

// Server
app.listen(app.get("PORT"), () => console.log(`Server running on port ${app.get("PORT")}`));