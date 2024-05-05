#!/usr/bin/env python3

"""Measures total execution time."""
# Importing the wait_n function from the previous file
wait_n = __import__('1-concurrent_coroutines').wait_n
import time


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for wait_n(n, max_delay) and returns total_time / n.

    Args:
        n (int): Number of times to spawn wait_random.
        max_delay (int): Maximum delay value for each wait_random call.

    Returns:
        float: Average execution time per call of wait_n(n, max_delay).
    """
    start_time = time.time()
    for _ in range(n):
        wait_n(max_delay)
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
