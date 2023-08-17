//required files
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

// config dot env file 
dotenv.config()

//data base
connectDb();


//rest
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
// app.get("/",(req,res)=>{
//     res.send(`<h1>Prasanna!!</h1>`);
// })

//user routes
app.use("/api/v1/users",require("./routes/userRoute"));

//transaction routes
app.use("/api/v1/transactions",require("./routes/transactionRoutes"));

//port
const PORT = 5000|| process.env.PORT;

app.listen(PORT,() =>{
    console.log("server running");
})