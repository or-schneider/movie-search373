import { Router } from "express";
import getPopularMoviesController from "../../controllers/getPopularMoviesController.js";

const moviesRouter = Router();
const routePath = "/movies";

moviesRouter.get(`${routePath}/popular`, getPopularMoviesController);

export default moviesRouter;
