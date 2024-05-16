#!/usr/bin/env python3
"""Inherit form BaseCaching, a caching system."""
BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """This class inherits from BaseCaching"""
    def __init__(self):
        super().__init__()
        self.data = {}
        self.next_in, self.next_out = 0, 0

    def _pop(self):
        """Remove element using FIFO"""
        self.next_out += 1
        key = self.data[self.next_out]
        del self.data[self.next_out], self.cache_data[key]

    def _push(self, key, item):
        """Add element using FIFO"""
        if len(self.cache_data) > BaseCaching.MAX_ITEMS - 1:
            print("DISCARD: {}".format(self.data[self.next_out + 1]))
            self._pop()
        self.cache_data[key] = item
        self.next_in += 1
        self.data[self.next_in] = key

    def get(self, key):
        """Dict getter"""
        if key is None or self.cache_data.get(key) is None:
            return None
        if key in self.cache_data:
            value = self.cache_data[key]
            return value

    def put(self, key, item):
        """Dict setter"""
        if key and item:
            if key in self.cache_data:
                self.cache_data[key] = item
            else:
                self._push(key, item)
