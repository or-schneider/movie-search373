import express from "express";
import apiRouter from "./routers/apiRouter.js";
import cors from "cors";

const app = express();

const port = process.env.port;
const host = process.env.HOST;
const url = `http://${host}:${port}`;

const corsAllowedOrigin = process.env.CORS_ALLOWED_ORIGIN;
app.use(cors({ origin: corsAllowedOrigin, credentials: true }));

app.use(apiRouter);

app.listen(port, host, () => {
  console.log(`app listening on ${url}`);
});
