#!/usr/bin/env ruby

# Create all project files and add executable privileges

# List of filenames
files = [
    
]

# Iterate over each filename
files.each do |file|
    # Create the file
    File.open(file, 'w') do |f|
        # Write the shebang line
        f.write('#!/usr/bin/env python3\n')
    end

    # Set executable permission
    File.chmod(0755, file)
end

puts "Project files created successfully."
