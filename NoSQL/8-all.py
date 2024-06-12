#!/usr/bin/env python3
""" List all Python docs """
import pymongo


def list_all(mongo_collection):
    """ Lists documents in a collection """
    if not mongo_collection:
        return []
    return list(mongo_collection.find())
