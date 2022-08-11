import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(router);

app.get("/", (req, res) => {
  res.send("upload api");
});

app.listen(PORT, () => {
  console.log(`listening to http://127.0.0.1:${PORT}`);
});
