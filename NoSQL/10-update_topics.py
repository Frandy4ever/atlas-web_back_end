#!/usr/bin/env python3
"""Update school topics"""


def update_topics(mongo_collection, name, topics):
    """Updates all topics of a school document based on the name """
    return mongo_collection.update_many({ "name": name }, { "$set": { "topics": topics } })
