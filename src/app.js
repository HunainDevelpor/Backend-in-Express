const express = require('express');
const app=express()
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cors({credentials:true}))
app.use(express.urlencoded({limit:"12kb"}))
app.use(express.json({limit:"12kb"}))
app.use(express.static('public'))
app.use(cookieParser())
module.exports={app}