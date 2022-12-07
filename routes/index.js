const router = require("express").Router();
const usuariorouter= require("./user");

router.use("/usuario",usuariorouter);


module.exports=router;

