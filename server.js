const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
//4- middleware
app.use(express.json());

//2- connect to database
connectDB();

// 3-routes

app.use("/api/contacts", require("./routes/contact"));
//1- create port
const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log("erreur") : console.log(`server is running on port ${port}`)
);
