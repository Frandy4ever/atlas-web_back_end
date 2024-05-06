#!/usr/bin/env bash

# Create all project files and add executable privileges

# List of filenames
files=(
    
)

# Iterate over each filename
for file in "${files[@]}"; do
    # Create the file and write the shebang line
    echo '#!/usr/bin/env python3' > "$file"

    # Set executable permission
    chmod +x "$file"
done

echo "Project files created successfully."
