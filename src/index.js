import { createServer } from "@graphql-yoga/node";

const typeDefs = `
type Query{
    hello : String!
    name: String! 
    id: ID!
    local: String!
    idade: Int!
    deMaior: Boolean!
    salario: Float
}
`

const resolvers = {
    Query: {
        hello(){
         return "salve" },
        
    name(){
        return "Thales"
    },
    id(){
        return"umid"
    },
    local(){
        return "SP"
    },
    idade(){
        return 22
    },
    deMaior(){
        return true
    },
    salario(){
        return 9999
    }

}
}
const server = createServer ({
schema: {
    typeDefs, resolvers
}
})

server.start()