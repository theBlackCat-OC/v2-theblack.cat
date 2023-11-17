#!/bin/zsh

# Input and output files
INPUT_JS_FILE="new-commworks-gallery.js"
JSON_FILE="parsed-commworks-gallery.json"

# Start of the JSON file
echo "[" > $JSON_FILE

# Read from the input JS file
while IFS= read -r line; do
  # Extract data from the input line using awk
  src=$(echo $line | awk -F"'" '{print $2}')
  tags=$(echo $line | awk -F"'" '{print $4}')
  description=$(echo $line | awk -F"'" '{print $6}')

  # Escape double quotes in the description
  description=${description//\"/\\\"}

  # Format the data as a JSON object and append to the JSON file
  echo "  {" >> $JSON_FILE
  echo "    \"src\": \"$src\"," >> $JSON_FILE
  echo "    \"tags\": \"$tags\"," >> $JSON_FILE
  echo "    \"description\": \"$description\"" >> $JSON_FILE
  echo "  }," >> $JSON_FILE
done < $INPUT_JS_FILE

# End of the JSON file
echo "]" >> $JSON_FILE