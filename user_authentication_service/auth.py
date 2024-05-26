#!/usr/bin/env python3
"""This program creates hash authentication"""
from db import DB
import bcrypt


def _hash_password(password: str) -> str:
    '''self descriptive'''
    salted_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return salted_password


class Auth:
    """Auth class to interact with the authentication database.
    """
    def __init__(self):
        """ constructor """
        self._db = DB()

    def register_user(self, email: str, password: str) -> User:
        """ Returns user object with mandatory
        email and password verification """
        try:
            self._db.find_user_by(email=email)
        except NoResultFound:
            new_registry = self._db.add_user(email, _hash_password(password))
            return new_registry
        else:
            raise ValueError(f'User {email} already exists')
