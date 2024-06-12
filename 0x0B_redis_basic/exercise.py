#!/usr/bin/env python3

"""Writing strings to Redis"""
import redis
import uuid
from typing import Union, Optional, Any, Callable


class Cache:
    """ class """
    def __init__(self):
        """ Constructor - store an instance of the Redis client as a private
        variable named _redis and flush the instance using flushdb """
        self._redis = redis.Redis()
        self._redis.flushdb()

    @call_history
    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """ With uuid, generate random key, store the input data in
        Redis using the random key and return the key """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str,
            fn: Optional[Callable] = None) -> Union[str, bytes, int, float]:
        """Callable will be used to convert data back to the desire format."""
        data = self._redis.get(key)
        if fn:
            return fn(data)
        return data

    def get_str(self, key: str) -> str:
        """Parametrize Cache.get to str """
        data = self._redis.get(key)
        return data.decode("utf-8")

    def get_int(self, key: str) -> int:
        """Parametrize Cache.get to int """
        data = self._redis.get(key)
        try:
            data = int(value.decode("utf-8"))
        except Exception:
            data = 0
        return data
