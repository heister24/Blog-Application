import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import ConnectDb from './config/ConnectDb.js'
import adminRouter from './routes/admin.route.js'

const app = express()

const Port = process.env.PORT || 9000

ConnectDb();

app.use(express.json())
app.use(cors())

app.use('/api/admin',adminRouter)

app.listen(Port,()=>{
    console.log(`App is running on port no ${Port}`)
})