const express = require("express");
const db = require("../db/connection.js");
const itemRouter = require("./routes/item.js");

const port = 5001;
const app = express();

app.use(express.json());
app.use("/item", itemRouter);

app.listen(port, async () => {
  await db.sync();
  console.log(`Listening on port ${port}`);
});
