#!/usr/bin/env python3

""""This program will create new files with shebang line and add execution permissions to them."""
import os
# List of file names to create
files = [
    ""
]

for file in files:
    with open(file, 'w') as f:
        f.write("#!/usr/bin/env python3")
        os.chmod(file, 0o755)
