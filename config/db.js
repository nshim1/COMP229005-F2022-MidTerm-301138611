// Do not expose your credentials in your code.
let atlasDB =
  "mongodb+srv://comp229005_mid:nshim1@academic.sghii0v.mongodb.net/midterm?retryWrites=true&w=majority";

// Database setup
let mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(atlasDB);
  let mongodb = mongoose.connection;

  mongodb.on("error", console.error.bind(console, "Connection Error:"));
  mongodb.once("open", () => {
    console.log("===> Connected to MongoDB.");
  });

  return mongodb;
};
