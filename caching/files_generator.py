#!/usr/bin/env python3

"""This module will generate a new file from the files list,
add the Shebang line and give it execution permissions"""
import os
# List of potential new files
files = [
    "0-basic_cache.py",
    "1-fifo_cache.py",
    "2-lifo_cache.py",
    "3-lru_cache.py",
    "4-mru_cache.py"
]

for file in files:
    # Create new file
    with open(file, 'w') as f:
        # Add Shebang line to new file
        f.write("#!/usr/bin/env python3")
        # Give execution permission to new file
        os.chmod(file, 0o755)

print("All files have been successfully created.")
