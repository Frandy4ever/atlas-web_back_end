#!/usr/bin/env python3
"""
This module runs a coroutine that will execute async_comprehension
fout times in parallel using ayncio gather.
"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Coroutine that executes async_comprehension
    four times in parallel using asyncio.gather,
    measures the total runtime, and returns it.

    Returns:
        float: Total runtime of executing async_comprehension
        four times in parallel.
    """
    tasks = []
    start_time = time.time()
    for _ in range(4):
        tasks.append(asyncio.create_task(async_comprehension()))
    await asyncio.gather(*tasks)
    end_time = time.time()
    return end_time - start_time
