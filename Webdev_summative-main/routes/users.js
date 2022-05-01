const express =require('express')
const User = require('../models/user')
const db=require('../db/db_connection')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

const router=express.Router()
//const tasks_controller=require('../controller/reddit_controller')
db


//router.post('/user/', tasks_controller.get_all_tasks)

router.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { username, password } = req.body;
  
      // Validate user input
      if (!(username && password)) {
        res.status(400).send("Input required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ username });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const secret_token="Thel25";
        const token = jwt.sign(
          { user_id: user._id, username},
          secret_token,
          {
            expiresIn: "3h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user.token);


      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });




  router.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const {username, password } = req.body;
  
      // Validate user input
      if (!(username&& password)) {
        res.status(400).send("Input required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ username });
  
      if (oldUser) {
        return res.status(409).send("User Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        username: username.toLowerCase(), // sanitize: convert username to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const secret_token="Thel25";
      const token = jwt.sign(
        { user_id: user._id, username },
        secret_token,
        {
          expiresIn: "3h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  
module.exports=router