#!/usr/bin/env python3

"""
This script when run will add execution persions and 
a shebang line to each file stored in files then creates the file
"""
import os

# List of filenames to be created
files = [
    '0-uniq_users.sql',
    '1-country_users.sql', 
    '2-fans.sql' ,
    '3-glam_rock.sql',
    '4-store.sql',
    '5-valid_email.sql',
    '6-bonus.sql',
    '7-average_score.sql',
    '8-index_my_names.sql',
    '9-index_name_score.sql',
    '10-div.sql',
    '11-need_meeting.sql',
    '100-average_weighted_score.sql',
    '101-average_weighted_score.sql'
]

# Iterate over each filename
for file in files:
    # Create the file
    with open(file, 'w') as f:
        pass

print("Project files created successfully.")
