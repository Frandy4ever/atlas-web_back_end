#!/usr/bin/env ruby

# Create all project files and add executable privileges

# List of filenames
files = [
    '0-add.py', '1-concat.py', '2-floor.py', '3-to_str.py',
    '4-define_variables.py', '5-sum_list.py', '6-sum_mixed_list.py',
    '7-to_kv.py', '8-make_multiplier.py', '9-element_length.py'
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
