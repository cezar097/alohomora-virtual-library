const express = require('express')
const app = express()
const axios = require('axios')
const APIKey = 'AIzaSyBbRCUtpZtIjANRL8ZZALBOmJ2_fbW7tLQ'


var nodeadmin = require('nodeadmin')
app.use('/nodeadmin',nodeadmin(app))

var cors = require('cors');
app.use(cors());

app.use('/',express.static('alohomora/build'))
app.use(express.json())
app.use(express.urlencoded())
app.listen(8080)

const Sequelize = require('sequelize')
const sequelize = new Sequelize('alohomora', 'root','',{
    dialect: 'mysql',
    host: 'localhost',
    define : {
		timestamps : false
	}
})

const Users = sequelize.define('users',{
    email: Sequelize.STRING,
    pass: Sequelize.STRING,
})

const Books = sequelize.define('books',{
    title: Sequelize.STRING,
    author: Sequelize.STRING
})

Users.belongsToMany(Books, {through: 'favorites'})
Books.belongsToMany(Users, {through: 'favorites'})

sequelize.authenticate().then(()=>{
    console.log('Connected to database')
}).catch(()=>{
    console.log('Failed to connect to database')
})

app.get('/createdb',(request,response)=>{
    sequelize.sync({force: true}).then(()=>{
        response.status(200).send('Tables created')
    }).catch((err)=>{
        console.log(err)
        response.status(500).send('Error at creating tables')
    })
})

app.get('/users',function(request,response){
    Users.findAll({include: [Books]}).then((users)=>{
        response.status(200).json(users)
    }).catch((ex)=>{
        console.log(ex)
    })
})

app.post('/users',(request,response)=>{
    Users.create(request.body).then((user)=>{
        response.status(201).json(user)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/users/:email',(request,response)=>{
   Users.findAll({include: [{model: Books}], where: {email: request.params.email}}).then((users)=>{
       response.status(200).json(users)
   }).catch((ex)=>{
        console.log(ex)
    })
})

app.get('/books', (request,response)=>{
    Books.findAll().then((books)=>{
        response.status(200).json(books)
    }).catch((ex)=>{
        console.log(ex)
    })
})

app.post('/books', (request,response)=>{
    Books.create(request.body).then((book)=>{
        response.status(201).json(book)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/books/:title',(request,response)=>{
    Books.findAll({where: {title : request.params.title}}).then((books)=>{
        response.status(200).json(books)
    }).catch((ex)=>{
        console.log(ex)
    })
})

app.get('/authors/:author',(request,response)=>{
    Books.findAll({where: {author : request.params.author}}).then((books)=>{
        response.status(200).json(books)
    }).catch((ex)=>{
        console.log(ex)
    })
})

app.post('/favorites/:email/:bookid', (request,response)=>{
    Users.findOne({include: [{model: Books}], where: {email: request.params.email}}).then((user)=>{
        user.addBooks(request.params.bookid)
        response.status(201).json({'message':'added'})
    }).catch((ex)=>{
        console.log(ex)
    })
})

app.get('/favorites/:email', (request,response)=>{
    Users.findOne({include: [{model: Books}], where: {email: request.params.email}}).then((books)=>{
        response.status(201).json(books.books);
    }).catch((ex)=>{
        console.log(ex)
    })
})

app.get('/googlebooks/:title',function(request, response) {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:'+request.params.title+'&maxResults=40&key='+APIKey).then((books)=>{
        response.status(200).json(books.data)
    }).catch((ex)=>{
        console.log(ex)
    })
})

app.get('/googleauthors/:author',function(request, response) {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:'+request.params.author+'&maxResults=40&key='+APIKey).then((books)=>{
        response.status(200).json(books.data)
    }).catch((ex)=>{
        console.log(ex)
    })
})
