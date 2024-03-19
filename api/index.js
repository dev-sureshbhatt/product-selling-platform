import express from 'express'
import mongoose from 'mongoose'

const app = express()
const MONGO_STRING = process.env.MONGO_STRING

app.listen('4000', ()=>{
    console.log("app listening")
})


mongoose.connect(MONGO_STRING).then(()=>{}).catch(()=>{console.log("something went wrong connecting MONGOOSE")})