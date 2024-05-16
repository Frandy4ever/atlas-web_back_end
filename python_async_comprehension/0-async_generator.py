#!/usr/bin/env python3

"""
This script takes on no arguments, runs a coroutine 10 times, 
asynchronously waits 1sec, then yield a random number 0 through 10.
"""
import asyncio
from typing import AsyncGenerator
import random


async def async_generator() -> AsyncGenerator[float, None, None]:
    """Async generator"""
    for _ in range(11):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
