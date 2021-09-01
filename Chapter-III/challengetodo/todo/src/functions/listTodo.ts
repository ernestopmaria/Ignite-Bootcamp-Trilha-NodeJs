import { APIGatewayProxyHandler } from "aws-lambda"
import { document } from "../utils/dynamodbClient"

export const handle:APIGatewayProxyHandler = async(event)=>{

    const {id} = event.pathParameters

    const todos = await document.scan({
        TableName:"users_todo",
        FilterExpression:"user_id = :id",
        ExpressionAttributeValues:{":id": id}
    }).promise()

    

   if(todos){
     return {
         statusCode:200,
         body:JSON.stringify({
             message:"Todos Encontrados!",
             todos
         }),
     }
 }
 return{
     statusCode:400,
     body:JSON.stringify({
        message:"User id invalido",

    })
 }
}
