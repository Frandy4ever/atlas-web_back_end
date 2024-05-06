#!/usr/bin/env python3

"""
This fn takes no args, it imports async_generator,
runs a coroutine which collects 10
random numbers using async comprehension
then return 10 random numbers
"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[int]:
    """Returns the randomly collected numbers"""
    return [num async for num in async_generator()]
