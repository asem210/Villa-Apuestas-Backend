
const router = require("express").Router();
const userController = require("../controllers/user");


router.get("/", (req, res, next) => {
    return res.status(200).json({
      message: "Hello desde villalobos!",
    });
  });

  router.post("/register", async (req, res) => {
      const {email, name,username,date_of_birth,dni,gender,password,phone}= JSON.parse(req.body) ;
      const registerResponse = await userController.register(email, name,username,date_of_birth,dni,gender,password,phone);
      res.send(registerResponse)
    });
  
  
  router.get("/hello", (req, res, next) => {
    return res.status(200).json({
      message: "Hello from path!",
    });
  });
  
  router.use((req, res, next) => {
    return res.status(404).json({
      error: "Not Found",
    });
  });
  
  module.exports=router;
  