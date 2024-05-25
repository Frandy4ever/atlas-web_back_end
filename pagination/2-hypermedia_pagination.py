#!/usr/bin/env python3
"""
This program implements a get_hyper method that takes the same arguments as
get_page and return a dictionary.
"""
import csv
from typing import List, Tuple, Dict, Any
import math


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


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE: str = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Obtain a page of data from the dataset.

        Args:
            page (int, optional):
                The page number to retrieve. Defaults to 1.
            page_size (int, optional):
                The number of items per page. Defaults to 10.

        Returns:
            List[List]: A list containing the data for the specified page.

        Raises:
            AssertionError:
                If page or page_size is not a positive integer.
        """
        assert isinstance(page, int) and page > 0,\
            "Page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0,\
            "Page size must be a positive integer"

        # Calculate start and end indexes for the requested page
        start, end = index_range(page, page_size)

        # If start index is beyond the dataset size, return an empty list
        if start >= len(self.dataset()):
            return []

        # Retrieve the dataset and return the specified page
        return self.dataset()[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Obtain a page of data from the dataset with pagination metadata.

        Args:
            page (int, optional):
                The page number to retrieve. Defaults to 1.
            page_size (int, optional):
                The number of items per page. Defaults to 10.

        Returns:
            Dict[str, Any]: A dictionary containing pagination details and
            the data for the specified page.
        """
        data = self.get_page(page, page_size)
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": page + 1 if page < total_pages else None,
            "prev_page": page - 1 if page > 1 else None,
            "total_pages": total_pages
        }
