#!/usr/bin/env python3
"""Inherit form BaseCaching, a caching system."""
BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """This class inherits from BaseCaching and uses MRU algo"""
    def __init__(self):
        super().__init__()
        self.head, self.tail = 'head', 'tail'
        self.next, self.prev = {}, {}
        self.handle(self.head, self.tail)

    def handle(self, head, tail):
        """Handle element usign MRU"""
        self.next[head], self.prev[tail] = tail, head

    def _remove(self, key):
        """Remove element using MRU"""
        self.handle(self.prev[key], self.next[key])
        del self.prev[key], self.next[key], self.cache_data[key]

    def _add(self, key, item):
        """Add element using MRU"""
        if len(self.cache_data) > BaseCaching.MAX_ITEMS - 1:
            print("DISCARD: {}".format(self.prev[self.tail]))
            self._remove(self.prev[self.tail])
        self.cache_data[key] = item
        self.handle(self.prev[self.tail], key)
        self.handle(key, self.tail)

    def get(self, key):
        """Dict getter"""
        if key is None or self.cache_data.get(key) is None:
            return None
        if key in self.cache_data:
            value = self.cache_data[key]
            self._remove(key)
            self._add(key, value)
            return value

    def put(self, key, item):
        """Dict setter"""
        if key and item:
            if key in self.cache_data:
                self._remove(key)
            self._add(key, item)
