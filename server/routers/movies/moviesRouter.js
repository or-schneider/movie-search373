import { Router } from "express";
import getPopularMoviesController from "../../controllers/getPopularMoviesController.js";
import searchMoviesController from "../../controllers/searchMoviesController.js";

const moviesRouter = Router();
const routePath = "/movies";

moviesRouter.get(`${routePath}/popular`, getPopularMoviesController);
moviesRouter.get(`${routePath}/search`, searchMoviesController);

export default moviesRouter;
