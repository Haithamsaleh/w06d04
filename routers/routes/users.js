const express=require("express");
const{
    getAllTodos,
    getDoneTodo,
    createNewTodo,
    updateTodoDes,
    deletTodo,
}= require("./../controllers/users");

const getAllTodosMiddleware = (req,res,next)=>{
    console.log("get all users");
    next();
};
const userRouter= express.Router();

userRouter.get("/users",getAllTodosMiddleware, getAllUsers);
userRouter.post("/todos", createNewUsers);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deletUser);





module.exports = todoRouter;