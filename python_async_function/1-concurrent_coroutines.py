#!/usr/bin/env python3
"""
Spawn wait_random n times with the specified max_delay
using wait_random from '0-basic_async_syntax.py'
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with specified max_delay.

    Args:
        n (int): Number of times to spawn wait_random.
        max_delay (int): Max delay value for each wait_random call.

    Returns:
        List[float]: A list of delays in ascending order (float values)
    """
    # Store delays
    delays: float = []


    async def spawn_wait_random(delay_list):
        """
        Coroutine to spawn wait_random and append delay to delay_list
        """
        delay = await wait_random(max_delay)
        delay_list.append(delay)

    # Create tasks for spawning wait_random concurrently
    tasks = [spawn_wait_random(delays) for _ in range(n)]

    # Run all tasks concurrently
    await asyncio.gather(*tasks)

    return delays
