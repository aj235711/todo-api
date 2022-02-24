const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
mongoose.Schema.Types.String.set("trim", true);
mongoose.set("debug", process.env.NODE_ENV !== "production");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongo. yeah baby!!");
  })
  .catch((err) => {
    console.log("err connecting", err);
  });

app.use(cors());

app.use(require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
