const ServiceResponse = require("../entities/servicesResponse");
const userService = require("../services/user");

const userController = {

register: async (email, name,username,date_of_birth,dni,gender,password,phone)=>{
    const responseGet = await userService.get(email, name,username,date_of_birth,dni,gender,password,phone);

    if(responseGet.data){
        responseGet.setErrorResponse("El email seleccionado no es válido",400);
        return responseGet;
    }

    const  responseSave = await userService.save(email, name,username,date_of_birth,dni,gender,password,phone);
        return responseSave;


}





}

module.exports=userController;