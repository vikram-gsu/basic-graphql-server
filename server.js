const express = require("express");
const graphqlHTTP = require('express-graphql');
const { buildSchema, printSchema } = require("graphql");
const app = express();

const schema = buildSchema(`
    type Query {
        message: String 
    }
`);

const root = {
    message: () => "Hello"
}

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql: true
}))

const port = 3003;
app.listen(port, () => console.log(`Listening on port ${port}`))
// console.log(printSchema(schema))

