const Country = require("../models/Country");

module.exports = {
  Query: {
    async country(_, { name }) {
      return Country.findOne({ name: name });
    },
    async getCountries() {
      return Country.find();
    },
  },
  Mutation: {
    async addCountry(_, args) {
      const createdCountry = new Country({
        name: args.countryInput.name,
        year: args.countryInput.year,
        areaInSquareKilometres: args.countryInput.areaInSquareKilometres,
        totalPopulation: args.countryInput.totalPopulation,
      });
      const res = await createdCountry.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteCountry(_, { name }) {
      return (await Country.deleteOne({ name: name })).deletedCount;
    },
    async editCountry(_, args) {
      return (
        await Country.updateOne(
          { name: args.name },
          {
            name: args.countryInput.name,
            year: args.countryInput.year,
            areaInSquareKilometres: args.countryInput.areaInSquareKilometres,
            totalPopulation: args.countryInput.totalPopulation,
          }
        )
      ).modifiedCount;
    },
  },
};
