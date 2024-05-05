#!/usr/bin/env python3

"""
Async coroutine that takes in a random waiting time
as integer and return float.
"""
import random, asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    This function generates a random number between 0
    and a received max number to use as coroutine delay timer.

    Args:
        max_delay (int): Number used as random selection limit

    Return:
        float: elapsed time
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
