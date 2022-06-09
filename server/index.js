require('dotenv').config()
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const bodyParser = require('body-parser');

const schema = require('./schema/schema')

const port = process.env.PORT || 8000
const app = express()

app.use(bodyParser.json()); // application/json

app.use('/graph', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => console.log(`Server is running on port: ${port}`))