const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = 5000
const app = express()
//mongoose.connect('mongodb+srv://user:<password>@cluster0.bxyum.mongodb.net/<dbname>?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://Alex:gotsatsuk@cluster0.bxyum.mongodb.net/?retryWrites=true&w=majority')
 //,{useNewUrlParser: true})
app.use(cors())

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true,
   //rootValue: root
 }) )

const dbConnection = mongoose.connection
dbConnection.on('error', err => console.log(`Connaction error: ${err}`))
dbConnection.once('open', () => console.log(`db connected`))

app.listen(PORT, err => {
  err ? console.log(error) : console.log(`server ${PORT}`);
})
