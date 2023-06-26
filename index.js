import express from "express";
import TestRouter from "./TestRouter.js";
import bodyParser from "body-parser";

const port = 3005;
const app = express();

app.use(bodyParser.json());
app.use("/test", TestRouter);

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Server is up at port:${port}`);
});
