#!/usr/bin/env python3

"""This program will call filter_datum that returns
the log message obfuscated."""
from typing import List
import re
import logging
import mysql.connector
import os

PII_FIELDS = ('name', 'password', 'phone', 'email', 'ssn')


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        """Constructor fn"""
        self.fields = fields
        super(RedactingFormatter, self).__init__(self.FORMAT)

    def format(self, record: logging.LogRecord) -> str:
        """Filter values of incoming log records."""
        return filter_datum(self.fields, self.REDACTION,
                            super().format(record), self.SEPARATOR)


def filter_datum(fields: List[str],
                 redaction: str,
                 message: str,
                 separator: str) -> str:
    """Return the log message obfuscated"""
    for i in fields:
        message = re.sub(fr'{i}=.+?{separator}',
                         f'{i}={redaction}{separator}', message)
    return message


def get_logger() -> logging.Logger:
    """This program returns a logging.Logger object"""
    logger = logging.getLogger('user_data')
    logger.setLevel(logging.INFO)
    logger.propagate = False
    handler = logging.StreamHandler()
    """Containing the fields from user_data.csv that
    are considered PII."""
    handler.setFormatter(RedactingFormatter(PII_FIELDS))
    logger.addHandler(handler)

    return logger


def get_db() -> mysql.connector.connection.MySQLConnection:
    """This program returns a connector to a database."""
    return mysql.connector.connect(
        host=os.environ.get('PERSONAL-DATA-DB_HOST', 'localhost'),
        database=os.environ.get('PERSONAL_DATA_DB_NAME', 'root'),
        user=os.environ.get('PERSONAL_DATA_DB_USERNAME'),
        password=os.environ.get('PERSONAL_DATA_DB_PASSWORD', '')
    )
