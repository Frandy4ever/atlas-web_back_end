#!/usr/bin/env python3
"""Inherit form BaseCaching, a caching system."""
BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """This class inherits from BaseCaching and uses LIFO algo"""
    def __init__(self):
        super().__init__()
        self.last_key = ''

    def get(self, key):
        """Dict getter"""
        if key is None or self.cache_data.get(key) is None:
            return None
        if key in self.cache_data:
            value = self.cache_date[key]
            return value
        
    def put(self, key, item):
        """Dict setter"""
        if key and item:
            self.cache_date[key] = item
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                print('DISCARD: {}'.format(self.last_key))
                self.cache_data.pop(self.last_key)
            self.last_key = key
