import { Router } from "express";
import getMovieController from "../../controllers/getMovieController.js";
import getPopularMoviesController from "../../controllers/getPopularMoviesController.js";
import searchMoviesController from "../../controllers/searchMoviesController.js";

const moviesRouter = Router();
const routePath = "/movies";

moviesRouter.get(`${routePath}/popular`, getPopularMoviesController);
moviesRouter.get(`${routePath}/search`, searchMoviesController);
moviesRouter.get(`${routePath}/:id`, getMovieController);

export default moviesRouter;
