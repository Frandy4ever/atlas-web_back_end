#!/usr/bin/env python3

"""
This script takes on no arguments, runs a coroutine 10 times,
asynchronously waits 1sec, then yield a random number 0 through 10.
"""
import asyncio
from typing import Generator
import random


async def async_generator() -> Generator[float, None, None]:
    """Async generator"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
