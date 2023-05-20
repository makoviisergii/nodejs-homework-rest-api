const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://SergiiM:3e59LNicwx5h43KK@cluster0.c7tf8b3.mongodb.net/";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3000, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
