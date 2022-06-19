import Cache from "../../../core/cache.js";

const cacheMaxSize = 500;
const movieDetailsCache = new Cache(cacheMaxSize);

export default movieDetailsCache;
