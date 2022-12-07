const ServiceResponse = require("../entities/servicesResponse");
const userService = require("../services/user");



const userController = {

register: async (email, name,username,date_of_birth,dni,gender,password,phone)=>{
    const response = await userService.get(email, name,username,date_of_birth,dni,gender,password,phone);
    console.log(response);
    return response;

}





}

module.exports=userController;