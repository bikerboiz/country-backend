const { gql } = require("apollo-server");

module.exports = gql`
  type Country {
    name: String
    year: String
    areaInSquareKilometres: Int
    totalPopulation: Int
  }

  input CountryInput {
    name: String
    year: String
    areaInSquareKilometres: Int
    totalPopulation: Int
  }

  type Query {
    country(name: String!): Country!
    getCountries: [Country]
  }

  type Mutation {
    addCountry(countryInput: CountryInput): Country!
    deleteCountry(name: String!): Boolean
    editCountry(name: String!, countryInput: CountryInput): Boolean
  }
`;
