const express =require('express')
const app = express()
var schema  = require('./schema');
var resolvers  = require('./resolver');
var { graphqlHTTP } = require('express-graphql');
app.get("/",(req,res)=>{
    res.send("running")
})
//const root={lco:()=>console.log("hello learning coding grapql")}
const root = resolvers;

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true,

}))

app.listen(8082,()=>console.log("running at port 8082"))

