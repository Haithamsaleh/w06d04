const fs = require("fs");
let users = [];
fs.readFile("./db/users.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    users = JSON.parse(data.toString());
  }
});

const getAllUsers = (req, res) => {
  res.status(200).json(users);
};
const createNewUsers = (req, res) => {
    const User = {
      id: Users.length + 1,
      user: req.body.task,
    };
    Users.push(User);
  
    fs.writeFile("./db/users.json", JSON.stringify(Users), (err) => {
      if (err) {
        res.status(400).json("bad request");
      } else {
        res.status(200).json(users);
      }
    });
  };
  
const updateUsers = (req, res) => {
    const { id } = req.params;
    const { user } = req.body;
    let check = false;
  
    users.forEach((todo) => {
      if (ser.id == id) {
        if (ser != undefined) todo.task = task;
        check = true;
      }
    });
  
    if (check) {
      fs.writeFile("./db/users.json", JSON.stringify(users), (err) => {
        if (err) {
          res.status(400).json("bad request");
        } else {
          res.status(200).json(users);
        }
      });
    } else {
      res.status(404).json("task not found");
    }
  };
  const deletUser = (req, res) => {
    const { id } = req.params;
    let check = false;
  
    movies.forEach((todo) => {
      if (user.id == id) {
        check = true;
      }
    });
  
    if (check) {
      fs.writeFile("./db/users.json", JSON.stringify(users), (err) => {
        if (err) {
          res.status(400).json("bad request");
        } else {
          res.status(200).json(users);
        }
      });
    } else {
      res.status(404).json("task not found");
    }
  };
module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
  deletUser,
};
