#!/usr/bin/env python3
""" Hash password, Register user, Credentials validation, Generate UUIDs,
    Find user by session ID, Destroy session, Generate reset password token,
    Update password """
from db import DB
import bcrypt
from uuid import uuid4
from sqlalchemy.orm.exc import NoResultFound
from typing import Union
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

    def create_session(self, email: str) -> str:
        ''' Return session ID as a string '''
        try:
            user = self._db.find_user_by(email=email)
        except NoResultFound:
            return None
        session_id = _generate_uuid()
        self._db.update_user(user.id, session_id=session_id)
        return session_id

    def get_user_from_session_id(self, session_id: str) -> str:
        """ returns a string or None """
        try:
            user = self._db.find_user_by(session_id=session_id)
        except NoResultFound:
            return None
        else:
            return user

    def destroy_session(self, user_id: int) -> None:
        """ updates the corresponding user’s session ID to None """
        try:
            self._db.update_user(user_id, session_id=None)
        except NoResultFound:
            return None


def _generate_uuid() -> str:
    """ return a string representation of a new UUID """
    return str(uuid4())
