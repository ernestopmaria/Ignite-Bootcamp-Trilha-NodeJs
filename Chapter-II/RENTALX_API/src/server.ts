import 'reflect-metadata'
import express from "express";
import './database'
import './shared/container'
import swagguerUi from 'swagger-ui-express'
import { router } from "./routes";
import swaggerFile from './swagger.json'



const app = express()
app.use(express.json())
app.use("/api-docs", swagguerUi.serve, swagguerUi.setup(swaggerFile))
app.use(router)
app.listen(3333, () => {
    console.log("Server is running")
})