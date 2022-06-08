const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const usersRouter = require('./routers/usersRouter')
const coursesRouter = require('./routers/coursesRouter')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/users', usersRouter)
app.use('/courses', coursesRouter)


const CONNECTION_STRING = "mongodb+srv://Neoara:Good99girl@cluster0.zewatul.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING, function(err){
        if(err) return console.log(err);
        app.listen(8080, () => console.log("Сервер запущен"));
    }
);