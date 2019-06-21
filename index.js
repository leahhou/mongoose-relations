//index.js is the file that actually run the app
//app.js is the file that set up everything for the app

const mongoose = require("mongoose");
const port = 3000;
const app = require("./app");


mongoose.connect("mongodb://localhost/books_r_us", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

app.listen(port, () => console.log(`Server is listening on port ${port}`));