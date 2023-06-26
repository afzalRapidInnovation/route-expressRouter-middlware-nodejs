import express from "express";
import { middleware } from "./middlwware.js";

const TestRouter = express.Router();

TestRouter.get("/", middleware, (req, res, next) => {
  res.json({ Hello: "TestRouter" });
});

export default TestRouter;
