#!/bin/bash

output_file="project_compilation.txt"

# Clear or create the output file
true > "$output_file"

# Function to check if a file is text based on extension
is_text_file() {
    local file="$1"
    case "${file,,}" in  # Convert to lowercase for matching
        *.txt|*.rb|*.py|*.js|*.jsx|*.ts|*.tsx|*.css|*.scss|*.sass|*.less|*.html|*.htm|*.haml|*.erb|*.slim|\
        *.yml|*.yaml|*.json|*.md|*.markdown|*.xml|*.conf|*.cfg|*.ini|*.sh|*.bash|*.zsh|*.fish|*.coffee|\
        *.rake|*.ru|*.gemspec|*.env|*.env.*|*.gitignore|*.dockerignore|*.editorconfig|*.eslintrc|\
        *.prettier*|*.babel*|*.postcss*|*.stylelint*|*.npmrc|*.yarnrc|*.rspec|*.rubocop.yml|*.haml-lint.yml|\
        *.jshintrc|*.babelrc|gemfile|rakefile|procfile|readme*|license*|changelog*|contributing*|dockerfile|\
        *docker-compose.yml|*.service|*.sql|makefile|*.pp|*.eex|*.leex|*.heex|*.vue|*.svelte|*.php|\
        *.java|*.scala|*.kt|*.kts|*.go|*.rs|*.toml|*.c|*.h|*.cpp|*.hpp|*.cs|*.fs|*.ex|*.exs)
            return 0  # It's a text file
            ;;
        *)
            return 1  # Not a text file
            ;;
    esac
}

# Function to handle each file
process_file() {
    local file="$1"

    # Skip if file is not a text file
    if ! is_text_file "$file"; then
        echo "Skipping non-text file: $file"
        return
    fi

    # Add file header and contents
    {
        echo -e "\n/*******************************************************************************"
        echo "* File: $file"
        echo -e "*******************************************************************************/\n"
        cat "$file"
    } >> "$output_file"

    echo "Processed: $file"
}

# Get list of files, excluding .git directory and files in .gitignore
if git ls-files > /dev/null 2>&1; then
    # Git repository exists, use git ls-files
    while IFS= read -r file; do
        if [ -f "$file" ]; then
            process_file "$file"
        fi
    done < <(git ls-files)
else
    # No git repository, use find and exclude common binary files
    while IFS= read -r file; do
        if [ -f "$file" ]; then
            process_file "$file"
        fi
    done < <(find . -type f \
        ! -path "./.git/*" \
        ! -path "*/node_modules/*" \
        ! -path "*/tmp/*" \
        ! -path "*/log/*" \
        ! -name "*.jpg" \
        ! -name "*.jpeg" \
        ! -name "*.png" \
        ! -name "*.gif" \
        ! -name "*.pdf" \
        ! -name "*.zip" \
        ! -name "*.tar" \
        ! -name "*.gz" \
        ! -name "*.rar" \
        ! -name "*.exe" \
        ! -name "*.bin" \
        ! -name "*.dat" \
        ! -name "*.db" \
        ! -name "*.lock" \
        ! -name "*.sqlite3")
fi

echo "Compilation complete. Output saved to $output_file"