const { model, Schema } = require("mongoose");

const countrySchema = new Schema({
  name: String,
  year: String,
  areaInSquareKilometres: Number,
  totalPopulation: Number,
});

module.exports = model("Country", countrySchema);
