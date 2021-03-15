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
        statemant: []
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
        type: "Credit"
    }
    customer.statemant.push(statementOperation);
    return response.status(201).send();
})

app.listen(3333,
    console.log("server started 1"))