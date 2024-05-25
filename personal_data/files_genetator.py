#!/usr/bin/env python3

"""This program will create specified new files and add shebang line
to thems and give them execution permissions."""
import os

"""List of files names"""
files = [
    "filtered_logger.py",
    "encrypt_password.py"
]

for file in files:
    # Create new files
    with open(file, 'w') as f:
        # Write to files
        f.write("#!/usr/bin/env python3")
        # Add execution permissions
        os.chmod(file, 0o755)
