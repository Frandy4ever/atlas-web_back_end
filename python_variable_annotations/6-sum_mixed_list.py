#!/usr/bin/env python3

"""
Return the sum of floats and ints as float.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calc the sum of elements in list of ints and floats.

    Args:
        mxd_lst (List[Union[int, float]]): A list of integers and floats.

    Returns:
        float: The sum of elements in the input list.
    """
    return sum(mxd_lst)
