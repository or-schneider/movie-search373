import Cache from "../../core/cache.js";

const cacheMaxSize = 10;
const moviesCache = new Cache(cacheMaxSize);

export default moviesCache;
