#!/usr/bin/env python3

"""Return a multiplier function"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Function that multiplies a float by a given multiplier

    Args:
        multiplier (float): multiplier value.

    Returns:
        Callable[[float], float]: A function that
        multiplies a float by a given multiplier
    """

    def multiplier_fn(x: float) -> float:
        return x * multiplier
    return multiplier_fn
