#!/usr/bin/env python3
"""This program creates hash authentication"""
from db import DB
import bcrypt


def _hash_password(password: str) -> str:
    '''self descriptive'''
    salted_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return salted_password
