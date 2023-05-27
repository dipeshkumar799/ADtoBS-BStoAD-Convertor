import { ad2bs, bs2ad } from "ad-bs-converter";
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
export default resolvers;
