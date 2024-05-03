#!/usr/bin/env python3

"""
Calc length of elements in the list
"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return a list of tuples containing each element from
    the input list and its length.

    Args:
        lst (Iterable[Sequence]): input iterable of sequence.

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples where each
        tuple contains an element from the input
        iterable and its corresponding length.
    """
    return [(i, len) for i in lst]
