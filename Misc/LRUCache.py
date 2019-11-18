'''
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
'''

class LRUCache:

    def __init__(self, capacity: int):
      self.cache = []
      self.capacity = capacity  

    def get(self, key: int) -> int:
      value = -1
      i = 0
      while i < self.capacity:
        if self.cache[i][0] == key:
          value = self.cache[i][1]
          break
          
      if value == -1:
        return value
      else:
        kv = self.cache.pop(i)
        self.cache.insert(0,kv)
        return value        

    def put(self, key: int, value: int) -> None:
        kv = (key, value)
        self.cache.insert(0,kv)
        if len(self.cache) > self.capacity:
          self.cache.pop()
        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)