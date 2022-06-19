import Cache from "../../core/cache.js";

const cacheMaxSize = 100;
const movieDetailsCache = new Cache(cacheMaxSize);

export default movieDetailsCache;
