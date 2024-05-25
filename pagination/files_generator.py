#!/usr/bin/env python3

"""This module will generate a new file from the files list,
add the Shebang line and give it execution permissions"""
import os
# List of potential new files
files = [
    "0-simple_helper_function.py",
    "1-simple_pagination.py",
    "2-hypermedia_pagination.py",
    "3-hypermedia_del_pagination.py"
]

for file in files:
    # Create new file
    with open(file, 'w') as f:
        # Add Shebang line to new file
        f.write("#!/usr/bin/env python3")
        # Give execution permission to new file
        os.chmod(file, 0o755)

print("All files have been successfully created.")
