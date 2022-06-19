import Cache from "../../../core/cache.js";

const cacheMaxSize = 10;
const popularMoviesCache = new Cache(cacheMaxSize);

export default popularMoviesCache;
