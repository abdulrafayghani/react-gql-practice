const { gql } = require('apollo-server');

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  input StdInput {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
    getMessage: String
  }

  type Mutation {
    addStudent(input: StdInput): Student
  }
`;

module.exports = typeDefs;
