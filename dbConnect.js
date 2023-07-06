const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ayush:vGs3qnPGeojxC16Z@cluster0.svvylwz.mongodb.net/' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))