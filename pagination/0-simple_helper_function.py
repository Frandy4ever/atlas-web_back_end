#!/usr/bin/env python3

"""This is a helper fn"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple containing the start and end indexes for pagination.

    Args:
        page (int): The page number.
        page_size (int): The size of each page.

    Returns:
        Tuple[int, int]: A tuple containing the start index and the end index
        corresponding to the range of indexes to return in a list for the
        given pagination parameters.
    """
    if page and page_size:
        start_index = (page - 1) * page_size
        end_index = start_index + page_size
        return start_index, end_index
