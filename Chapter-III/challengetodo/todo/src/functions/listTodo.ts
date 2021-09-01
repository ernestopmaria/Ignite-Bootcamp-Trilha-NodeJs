export const handle = async(event)=>{
    return{
        statusCode:201,
        body: JSON.stringify({
   
            message:"Passou!",
            
        }),
        headers:{
            "Content-type": "application/json"
        }
    }
}
