import { gql } from "apollo-server";

const typeDefs = gql`
  type ConversionResult {
    year: Int!
    month: Int!
    day: Int!
  }

  type Query {
    convertToBS(year: Int!, month: Int!, day: Int!): ConversionResult
    convertToAD(year: Int!, month: Int!, day: Int!): ConversionResult
  }
`;

export default typeDefs;
