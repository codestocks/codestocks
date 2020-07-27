import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import fs from 'fs'
import resolvers from './src/graphql/resolvers'

const PORT = process.env.PORT || 8080
const SCHEMA_PATH = './src/graphql/schema.graphql'
const schema = () => buildSchema(fs.readFileSync(SCHEMA_PATH).toString())

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema(),
    rootValue: resolvers,
    graphiql: true,
  })
)

app.listen(PORT, () => console.log(`Code stocks running on ${PORT}`))
