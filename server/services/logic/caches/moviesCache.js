import Cache from "../../../core/cache.js";

const cacheMaxSize = 500;
const moviesCache = new Cache(cacheMaxSize);

export default moviesCache;
