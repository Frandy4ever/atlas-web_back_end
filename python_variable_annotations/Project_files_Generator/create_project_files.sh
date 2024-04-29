#!/usr/bin/env bash

# Create all project files and add executable privileges

# List of filenames
files=(
    '0-add.py' '1-concat.py' '2-floor.py' '3-to_str.py'
    '4-define_variables.py' '5-sum_list.py' '6-sum_mixed_list.py'
    '7-to_kv.py' '8-make_multiplier.py' '9-element_length.py'
)

# Iterate over each filename
for file in "${files[@]}"; do
    # Create the file and write the shebang line
    echo '#!/usr/bin/env python3' > "$file"

    # Set executable permission
    chmod +x "$file"
done

echo "Project files created successfully."
