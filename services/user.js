const AWS = require("aws-sdk");
const ServiceResponse = require("../entities/servicesResponse");
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tabla = "villa_apuestas_database";


const userServices={

   get: async (email, name,username,date_of_birth,dni,gender,password,phone )=>{
    
    let serviceResponseGet= new ServiceResponse();
    
    const PK="VA-USUARIO#"+email;
    const SK=email;
    const GSI1_PK=PK;
    const GSI1_SK=username;
    const credits=0;
  
    const user = {
      PK,
      SK,
      username,
      name,
      credits,
      date_of_birth,
      dni,
      gender,
      password,
      phone,
      GSI1_PK,
      GSI1_SK,
    };

    var params = {
        TableName: "villa_apuestas_database",
        Key:{
            "PK": PK,
            "SK": email
        }
    };

    try{
     const {rows}= await dynamodb.get(params).promise();   

        serviceResponseGet.setSucessResponse("Usuario encontrado",rows[0])

    }catch(error){
    serviceResponseGet.setErrorResponse(PK,500) 

    }finally{
        return serviceResponseGet;
    }

   } 







}


module.exports=userServices;