#!/usr/bin/env python3

"""This file can be used to clear the Windows or Unix-like console screen"""
import os


def clear():
    """
    Clears the console screen.

    This function clears the console screen by executing the appropriate
    command based on the operating system.
    It uses 'cls' on Windows system and 'clear' on Unix-like systems.

    @return: None
    """
    os.system('cls' if os.name == 'nt' else 'clear')
