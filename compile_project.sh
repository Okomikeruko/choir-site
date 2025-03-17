#!/usr/bin/env bash

output_file="project_compilation.txt"

# Clear or create the output file
echo "" > "$output_file"

# Array of directories to exclude (add more as needed)
excluded_dirs=(
  ".git"
  "node_modules"
  "tmp"
  "log"
  "public/assets"
  "public/packs"
  "public/packs-test"
  "storage"
  "app/assets/builds"
  "coverage"
  "vendor/bundle"
  "vendor/cache"
)

# Array of file extensions to exclude
excluded_extensions=(
  "jpg" "jpeg" "png" "gif" "ico" "svg" "eot" "ttf" "woff" "woff2"
  "pdf" "zip" "tar" "gz" "rar" "exe" "bin" "dat" "db" "sqlite3"
  "min.js" "min.css" "map" "chunk.js" "chunk.css"
)

# Specific files to exclude by name
excluded_files=(
  "yarn.lock"
  "package-lock.json"
  "Gemfile.lock"
)

# Function to check if a file should be excluded based on its path
should_exclude_path() {
  local file_path="$1"
  local filename=$(basename "$file_path")

  # Check if file is in an excluded directory
  for dir in "${excluded_dirs[@]}"; do
    if [[ "$file_path" == *"/$dir/"* || "$file_path" == *"/$dir" ]]; then
      return 0 # True, exclude this file
    fi
  done

  # Check if file is in the excluded files list
  for excl_file in "${excluded_files[@]}"; do
    if [[ "$filename" == "$excl_file" ]]; then
      echo "Skipping excluded file: $file_path"
      return 0 # True, exclude this file
    fi
  done

  # Exclude files larger than 300KB
  if [[ -f "$file_path" ]]; then
    local file_size=$(stat -f "%z" "$file_path" 2>/dev/null || stat -c "%s" "$file_path" 2>/dev/null)
    if [[ -n "$file_size" && "$file_size" -gt 307200 ]]; then
      echo "Skipping large file: $file_path ($file_size bytes)"
      return 0 # True, exclude this file
    fi
  fi

  return 1 # False, don't exclude
}

# Function to check if a file should be excluded based on its extension
should_exclude_extension() {
  local file="$1"
  local file_lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')

  for ext in "${excluded_extensions[@]}"; do
    if [[ "$file_lower" == *".$ext" ]]; then
      return 0 # True, exclude this file
    fi
  done

  return 1 # False, don't exclude
}

# Function to check if a file is text based on extension
is_text_file() {
    local file="$1"
    local file_lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')

    # Common text file extensions
    case "$file_lower" in
        *.txt|*.rb|*.py|*.js|*.jsx|*.ts|*.tsx|*.css|*.scss|*.sass|*.less|*.html|*.htm|*.haml|*.erb|*.slim|\
        *.yml|*.yaml|*.json|*.md|*.markdown|*.xml|*.conf|*.cfg|*.ini|*.sh|*.bash|*.zsh|*.fish|*.coffee|\
        *.rake|*.ru|*.gemspec|*.env|*.env.*|*.gitignore|*.dockerignore|*.editorconfig|*.eslintrc|\
        *.prettier*|*.babel*|*.postcss*|*.stylelint*|*.npmrc|*.yarnrc|*.rspec|\
        *.jshintrc|gemfile|rakefile|procfile|readme*|license*|changelog*|contributing*|dockerfile|\
        *.service|*.sql|makefile|*.pp|*.eex|*.leex|*.heex|*.vue|*.svelte|*.php|\
        *.java|*.scala|*.kt|*.kts|*.go|*.rs|*.toml|*.c|*.h|*.cpp|*.hpp|*.cs|*.fs|*.ex|*.exs)
            return 0  # It's a text file
            ;;
        *)
            # If no extension match, try checking the file content with 'file' command
            if command -v file >/dev/null 2>&1; then
                local mime_type=$(file --mime-type -b "$file")
                if [[ "$mime_type" == text/* ]]; then
                    return 0  # It's a text file based on mime type
                fi
            fi
            return 1  # Not a text file
            ;;
    esac
}

# Function to handle each file
process_file() {
    local file="$1"

    # Skip the output file to avoid an infinite loop
    if [[ "$(basename "$file")" == "$output_file" ]]; then
        echo "Skipping output file: $file"
        return
    fi

    # Check if path should be excluded
    if should_exclude_path "$file"; then
        echo "Skipping excluded path: $file"
        return
    fi

    # Check if extension should be excluded
    if should_exclude_extension "$file"; then
        echo "Skipping excluded extension: $file"
        return
    fi

    # Skip if file is not a text file
    if ! is_text_file "$file"; then
        echo "Skipping non-text file: $file"
        return
    fi

    # Check if file exists and is readable
    if [[ ! -f "$file" || ! -r "$file" ]]; then
        echo "Warning: Cannot read file: $file"
        return
    fi

    # Check if file is empty or very small (less than 10 bytes)
    local file_size=$(stat -f "%z" "$file" 2>/dev/null || stat -c "%s" "$file" 2>/dev/null)
    if [[ -n "$file_size" && "$file_size" -lt 10 ]]; then
        echo "Skipping very small file: $file ($file_size bytes)"
        return
    fi

    # Add file header and contents
    {
        printf "\n/*******************************************************************************\n"
        printf "* File: %s\n" "$file"
        printf "* Size: %s bytes\n" "$file_size"
        printf "*******************************************************************************/\n\n"
        cat "$file"
    } >> "$output_file"

    echo "Processed: $file"
}

# Get list of files, excluding directories from the excluded list
find_files() {
    local exclude_params=""

    # Build exclude parameters for find command
    for dir in "${excluded_dirs[@]}"; do
        exclude_params="$exclude_params -not -path '*/$dir/*'"
    done

    # Try to use git ls-files if in a git repository
    if git ls-files > /dev/null 2>&1; then
        echo "Using git ls-files to find project files..."
        git ls-files | grep -v "^$output_file$"
    else
        echo "Using find command to locate project files..."
        # Using eval to execute the dynamic find command with all the exclude paths
        eval "find . -type f $exclude_params"
    fi
}

# Main execution
echo "Starting project compilation..."
echo "Output file: $output_file"

# Process each file
find_files | while IFS= read -r file; do
    if [[ -f "$file" ]]; then
        process_file "$file"
    fi
done

echo "Compilation complete. Output saved to $output_file"

# Print some stats about the compilation
echo "Compiled file stats:"
echo "- Lines: $(wc -l < "$output_file")"
echo "- Size: $(du -h "$output_file" | cut -f1)"
echo "- Files processed: $(grep -c "File: " "$output_file")"