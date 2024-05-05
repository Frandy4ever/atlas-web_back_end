#!/usr/bin/env python3
import random
import asyncio

async def wait_random(max_delay: int = 10) -> float:
    """
    Generates a random number between 0 and a received max number
    to use as coroutine delay timer.

    Args:
        max_delay (int): random max

    Returns:
        float: elapsed time
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

async def main() -> None:
    """Main fn used to run our wait_random() fn"""
    delay: float = await wait_random()
    print(delay)

asyncio.run(main())
