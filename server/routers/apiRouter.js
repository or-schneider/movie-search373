import { Router } from "express";
import moviesRouter from "./movies/moviesRouter.js";

const apiRouter = Router();
const routePath = "/api";

apiRouter.get(routePath, (req, res) => {
  res.send("API");
});

apiRouter.use(routePath, moviesRouter);

export default apiRouter;
