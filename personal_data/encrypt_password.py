#!/usr/bin/env python3

"""This program will encrypt passwords"""
import bcrypt


def hash_password(password: str) -> bytes:
    """Return a salted hashed password"""
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
