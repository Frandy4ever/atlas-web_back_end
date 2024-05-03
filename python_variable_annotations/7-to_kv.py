#!/usr/bin/env python3

"""
Return a tuple of the inputs string k and float or integer v
"""

from typing import Tuple, Union

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Create a tuple, first elm is string k, and second elm is 
    the square of the int or float v.

    Args:
        k (str): string key.
        v (Union[int, float]): interger or float value.

    Returns:
        Tuple[str, float]: A tuple cof the string k and square of v as float 
    """
    return (k, float(v) ** 2)
