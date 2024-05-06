#!/usr/bin/env python3
import asyncio
from typing import List
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
    start_time = asyncio.get_event_loop().time()  # Start time

    # Execute async_comprehension four times in parallel using asyncio.gather
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = asyncio.get_event_loop().time()  # End time
    return end_time - start_time  # Total runtime
