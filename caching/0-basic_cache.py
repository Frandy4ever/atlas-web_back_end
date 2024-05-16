#!/usr/bin/env python3
"""Creates a basic dictionary"""
BaseCaching = __import__("base_caching").BaseCaching


class BasicCache(BaseCaching):
    """Inherits from a no limit caching system"""
    def get(self, key):
        """Dict getter"""
        if key is None or self.cache_data.get(key) is None:
            return None

        return self.cache_data.get(key)

    def put(self, key, item):
        """Dict setter"""
        if key and item:
            self.cache_data[key] = item
