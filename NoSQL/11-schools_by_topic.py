#!/usr/bin/env python3
""" Learing Python """


def schools_by_topic(mongo_collection, topic):
    """ Returns list of school with a specific topic """
    return mongo_collection.find({ "topics": topic })
