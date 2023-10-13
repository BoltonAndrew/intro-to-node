const express = require("express");
const cors = require("cors");
const db = require("../db/connection.js");
const itemRouter = require("./routes/item.js");
const categoryRouter = require("./routes/category.js");
const userRouter = require("./routes/user.js");

const port = process.env.PORT || 5001;
const app = express();

app.use(cors()); // Allows access to the API from other apps.
app.use(express.json());
app.use("/item", itemRouter);
app.use("/category", categoryRouter);
app.use("/user", userRouter);

app.listen(port, async () => {
  await db.sync();
  console.log(`Listening on port ${port}`);
});
