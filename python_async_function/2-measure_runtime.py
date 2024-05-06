#!/usr/bin/env python3

"""Measures total execution time."""
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the average execution time for spawning n
    coroutines with a maximum delay.

    Args:
        n (int): The number of coroutines to spawn.
        max_delay (int): The maximum delay value for each coroutine.

    Returns:
        float: The average execution time per coroutine in seconds.
    """

    start_time: float = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
