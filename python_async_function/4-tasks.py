#!/usr/bin/env python3

"""
This script defines a fn task_wait_n that spawns task_wait_random
n times with specified max_delay, and returns a list of delays.
"""
import asyncio
from typing import List
from typing import Awaitable
task_wait_random = __import__('3-task').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn task_wait_random n times with specified max_delay.

    Args:
        n (int): Number of times to spawn task_wait_random.
        max_delay (int): Max delay value for each task_wait_random call.

    Returns:
        List[float]: List of delays in ascending order
    """
    delays: List[float] = []

    async def spawn_task_wait_random(delay_list):
        """
        Coroutine to spawn task_wait_random and append delay to delay_list
        """
        task = task_wait_random(max_delay)
        await task
        delay_list.append(task.result())

        tasks = [spawn_task_wait_random(delays) for _ in range(n)]
        await asyncio.gather(*tasks)

    return delays
