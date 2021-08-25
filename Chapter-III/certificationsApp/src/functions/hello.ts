


export const handle = async (event) =>{
    console.log("Chegou agui")
    return {
        statusCode: 201,
        body:JSON.stringify( {
         message: "Hello World Ignite Serverless",
        }),
        headers: {
        "Content-Type": "application/json",
        },
    };
};
