#!/usr/bin/env python3

"""
This script when run will add execution persions and 
a shebang line to each file stored in files then creates the file
"""
import os

# List of filenames to be created
files = [
    '0-basic_async_syntax.py',
    '1-concurrent_coroutines.py', 
    '2-measure_runtime.py',
    '3-task.py', 
    '4-tasks.py'  
]

# Iterate over each filename
for file in files:
    # Create the file
    with open(file, 'w') as f:
        # Write the shebang line
        f.write('#!/usr/bin/env python3\n')

    # Set executable permission
    os.chmod(file, 0o755)

print("Project files created successfully.")
