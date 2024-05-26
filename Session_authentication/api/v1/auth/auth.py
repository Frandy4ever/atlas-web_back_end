#!/usr/bin/env python3
"""This program is authentication management module"""
from flask import request
from typing import List, TypeVar


class Auth:
    '''Manages API authentications.'''

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        '''Reqired authentications.'''
        if not path or not excluded_paths:
            return True

        path += '/' if path[-1] != '/' else ''
        wildcard = any(rex.endswith("*") for rex in excluded_paths)

        if not wildcard:
            if path in excluded_paths:
                return False

        for rex in excluded_paths:
            if rex[-1] == '*':
                if path.startswith(rex[:-1]):
                    return False
            if rex == path:
                return False
        return True

    def authorization_header(self, request=None) -> str:
        """ authorization header """
        if request is None:
            return None
        if not request.headers.get("Authorization"):
            return None
        return request.headers.get("Authorization")

    def current_user(self, request=None) -> TypeVar('User'):
        '''Manages current user.'''
        return None
    
    def session_cookie(self, request=None):
        """ returns a cookie value from a request """
        if request is None:
            return None
        session_name = getenv('SESSION_NAME')
        return request.cookies.get(session_name)
