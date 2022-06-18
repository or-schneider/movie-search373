import { Queue } from "@datastructures-js/queue";

export default class Cache {
  constructor(maxCacheSize = 10) {
    this.cache = new Map();
    this.queue = new Queue();
    this.maxCacheSize = maxCacheSize;

    this.push = this.push.bind(this);
    this.deleteOldestEntry = this.deleteOldestEntry.bind(this);
    this.get = this.get.bind(this);
  }
  push(key, value) {
    if (this.cache.size >= this.maxCacheSize) {
      this.deleteOldestEntry(this.cache);
    }
    this.queue.enqueue(key);
    this.cache.set(key, value);
  }
  get(key) {
    return this.cache.get(key);
  }
  deleteOldestEntry() {
    this.cache.delete(this.queue.dequeue());
  }
}
