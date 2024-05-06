#!/usr/bin/env python3

"""
This fn uses a received integer to create an asyncio task.
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_dalay: int) -> asyncio.Task:
    """
    Return asyncio task from a given integer.

    Args:
        max_delay (int): integer used for creating asyncio task.

    Returns:
        asyncio.task: Representation of the coroutine time.
    """
    task = asyncio.create_task(wait_random(max_dalay))
    return task
