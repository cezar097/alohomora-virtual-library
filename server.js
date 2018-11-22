const express = require('express')
const app = express()

app.use('/',express.static('public'))
app.listen(8080)

const Sequelize = require('sequelize')
const sequelize = new Sequelize('alohomora', 'root','',{
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(()=>{
    console.log('Connected to database')
}).catch(()=>{
    console.log('Failed to connect to database')
})

const Users = sequelize.define('users',{
    username: Sequelize.STRING
})

const Books = sequelize.define('books',{
    ISBN: Sequelize.STRING,
    title: Sequelize.STRING,
    author: Sequelize.STRING
})

const Favorites = sequelize.define('favorites',{
    username: Sequelize.STRING,
    ISBN: Sequelize.STRING
})