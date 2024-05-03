#!/usr/bin/env python3

from typing import List
"""
Return the sum of a list of floats as float
"""


def sum_list(input_list: List[float]) -> float:
    """
    Calc the sum of elements in a list of floats.

    Args:
        input_lists (List[float]): A list of floats.

    Returns:
        float: The sum of elements in the input list.
    """
    return sum(input_list)
