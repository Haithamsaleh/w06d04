const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

const todoRouter=require("./routers/routes/users");

const app = express();

app.use(express.json());
// app.use(appMiddleware);
app.use(cors());

app.use(morgan("dev"));

app.use("/users", todoRouter)

//?
const appMiddleware = (req,res,next)=>{
  console.log("users");
  next();
}
//
const todoMiddleware = (req, res, next) => {
  console.log("users");
  next();
};

app.use("/users",todoMiddleware, todoRouter)

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
