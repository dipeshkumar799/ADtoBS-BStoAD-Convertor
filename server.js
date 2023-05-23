import { ApolloServer, gql } from "apollo-server";
import { ad2bs, bs2ad } from "ad-bs-converter";

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

const resolvers = {
  Query: {
    convertToBS: (_, { year, month, day }) => {
      const formattedDate = `${year}/${month}/${day}`;
      const convertedDate = ad2bs(formattedDate);

      return {
        year: convertedDate.en.year,
        month: convertedDate.en.month,
        day: convertedDate.en.day,
      };
    },
    convertToAD: (_, { year, month, day }) => {
      const formattedDate = `${year}/${month}/${day}`;
      const convertedDate = bs2ad(formattedDate);

      return {
        year: convertedDate.year,
        month: convertedDate.month,
        day: convertedDate.day,
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
