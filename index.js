const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

mongoose.connect("mongodb://localhost/books_r_us", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

app.listen(port, () => console.log(`Server is listening on port ${port}`));