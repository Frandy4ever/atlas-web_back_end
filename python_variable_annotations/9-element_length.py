#!/usr/bin/env python3

"""
List of tuple containing each element
from the input list and its length
"""

from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """
    Return a list of tuples containing each element from
    the input list and its length.

    Args:
        lst (list[tuple[str, int]]): 
            List of tuples where each contains an element
            from `lst` and its corresponding length.
    """
    return [(i, len) for i in lst]
