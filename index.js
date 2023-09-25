const express = require("express");
const app = express();
const fruitRouter = require("./routes/fruit.js");
const capitalize = require("./middleware/index.js");

app.use(express.json());
app.use(capitalize);

app.use("/fruits", fruitRouter); // http://localhost:5001/fruits/

app.listen(5001, () => {
  console.log("Server is listening on port:5001");
});
