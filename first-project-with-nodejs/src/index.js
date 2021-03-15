const { request, response } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid")


const app = express();
const customers = []

app.use(express.json())

function verifyIfExixtsAccountCPF(request, response, next) {
    const { cpf } = request.headers;

    const customer = customers.find(customer => customer.cpf === cpf)
    if (!customer) {
        return response.status(400).json({ error: "Customer not found" })
    }
    request.customer = customer;
    return next();
}

function getBalance(statement){
    const balance = statement.reduce((acc, operation)=>{
        if(operation.type==="credit"){
            return(acc + operation.amount)
        }else{
            return(acc - operation.amount)
        }
    }, 0)

    return balance;
}


app.post("/account", async (request, response) => {
    const { cpf, name } = request.body;
    const customerAlreadyExists = await customers.some(cpfs => cpfs.cpf === cpf)
    if (customerAlreadyExists) {
        return response.status(400).json({ err: "Customer already exists!" })
    }
    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    })

    return response.status(201).send()

})

app.get("/statement", verifyIfExixtsAccountCPF, (request, response) => {

    const { customer } = request;
    return response.json(customer)
})

app.post("/deposit", verifyIfExixtsAccountCPF, (request, response) => {
    const { description, amount } = request.body;
    const { customer } = request;
    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit"
    }
    customer.statement.push(statementOperation);
    return response.status(201).send();
})

app.post("/withdraw",verifyIfExixtsAccountCPF ,(request, response)=>{
    const { amount} = request.body;
    const {customer} =request

    const balance = getBalance(customer.statement);

    if(balance < amount){
        return response.status(400).json({error:"Insuficient founds!"})
    }

    const statementOperation = {
        amount,
        created_at: new Date(),
        type: "debit"
    }
    customer.statement.push(statementOperation);
    return response.status(201).send();
    
    
})

app.get("/statement/date", verifyIfExixtsAccountCPF, (request, response)=>{
    const {customer} = request;
    const {date} = request.query;

    const dateFormat = new Date(date + " 00:00");
    const statement = customer.statement.filter((statement)=>
        statement.created_at.toDateString()=== new Date(dateFormat).toDateString()
    )
    return response.json(statement)
})  

app.listen(3333,
    console.log("server started "))