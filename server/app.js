import express from "express";
import apiRouter from "./routers/apiRouter.js";

const app = express();

const port = process.env.port;
const host = process.env.HOST;

app.use(apiRouter);

app.listen(port, host, () => {
  console.log(`app listening on http://${host}:${port}`);
});
