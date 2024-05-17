import { gql } from "apollo-server";

export const typeDefs = gql`
  type Person {
    _id: ID!
    nom: String
    age: Int
    partenaire: Person
  }

  type Query {
    hello: String
    getPersons: [Person]
    getPersonById(id: ID!): Person
  }
`;
