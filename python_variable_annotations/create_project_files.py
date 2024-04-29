import os

# List of filenames
files = [
    '0-add.py', '1-concat.py', '2-floor.py', '3-to_str.py',
    '4-define_variables.py', '5-sum_list.py', '6-sum_mixed_list.py',
    '7-to_kv.py', '8-make_multiplier.py', '9-element_length.py'
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
