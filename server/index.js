require('dotenv').config()
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const bodyParser = require('body-parser');
const colors = require('colors')
const cors = require('cors')
const schema = require('./schema/schema')
const connenctDB = require('./config/db')

const port = process.env.PORT || 8000

const app = express()
connenctDB()

app.use(cors())
app.use(bodyParser.json()); // application/json

app.use('/graph', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => console.log(`Server is running on port: ${port}`))