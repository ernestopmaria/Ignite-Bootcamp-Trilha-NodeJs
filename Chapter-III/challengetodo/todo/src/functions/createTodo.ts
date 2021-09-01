import {uuid} from 'uuidv4'
import { document } from "src/utils/dynamodbClient"

interface ICreateTodo{
    user_id:string,
    title: string,
    done:boolean
    deadline: Date

}

export const handle = async(event)=>{

    const {user_id , title,  deadline} =JSON.parse(event.body) as ICreateTodo


  await document.put({
        TableName:"users_todo",
        Item:{
        id:uuid(),
        user_id,
        title,
        done: false,
        deadline
        }
    }).promise()

    

    return{
        statusCode:201,
        body:JSON.stringify({
            message:"Todo Created! ",        
            
        }),
        headers:{
           "Content-type":"application/json" 
        }
    }
   
}
