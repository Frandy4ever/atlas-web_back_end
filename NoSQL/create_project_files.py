#!/usr/bin/env python3

"""
This script when run will add execution persions and 
a shebang line to each file stored in files then creates the file
"""
import os

# List of filenames to be created
files = [
    '0-list_databases',
    '1-use_or_create_database', 
    '2-insert',
    '3-all', 
    '4-match',
    '5-count',
    '6-update',
    '7-delete',
    '8-all.py',
    '9-insert_school.py',
    '10-update_topics.py',
    '11-schools_by_topic.py',
    '12-log_stats.py',
    '100-find',
    '101-students.py',
    '102-log_stats.py'
]

# Iterate over each filename
for file in files:
    # Create the file
    with open(file, 'w') as f:
        if file.endswith('.py'):
            # Write the shebang line
            f.write('#!/usr/bin/env python3\n')

    # Set executable permission
    if file.endswith('.py'):
        os.chmod(file, 0o755)

print("Project files created successfully.")
