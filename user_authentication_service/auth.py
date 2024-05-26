#!/usr/bin/env python3
""" Hash password, Register user, Credentials validation, Generate UUIDs,
    Find user by session ID, Destroy session, Generate reset password token,
    Update password """
from db import DB
import bcrypt
from uuid import uuid4
from db import DB
from user import User


def _hash_password(password: str) -> str:
    '''Generate hash password'''
    salted_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return salted_password


class Auth:
    """Auth class to interact with the authentication database.
    """
    def __init__(self):
        """ Constructor function"""
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

    def valid_login(self, email: str, password: str) -> bool:
        """ credentials validation, return a boolean """
        try:
            user = self._db.find_user_by(email=email)
        except NoResultFound:
            return False
        else:
            return bcrypt.checkpw(password=password.encode('utf-8'),
                                  hashed_password=user.hashed_password)


def _generate_uuid() -> str:
    """ return a string representation of a new UUID """
    return str(uuid4())
