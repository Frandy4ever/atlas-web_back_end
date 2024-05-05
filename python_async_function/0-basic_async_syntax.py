#!/usr/bin/env python3

"""
Async coroutine that takes in a random waiting time 
as integer and return float.
"""
import random, asyncio

async def wait_random(max_delay: int = 10) -> float:
    """
    This fn will generate a random number between 0 and a receive max number
    to use as coroutine delay timer.

    Args:
        max_delay (int): Received number used as the max for the random selection

    Return:
        float: lasped time
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

async def main():
    """Main fn used to run our wait_random() fn"""
    delay = await wait_random()
    print(delay)

asyncio.run(main())
