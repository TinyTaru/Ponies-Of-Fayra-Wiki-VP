#!/bin/bash
# Move to the directory where this script is located
cd "$(dirname "$0")"

echo "========================================="
echo "Starting Ponies of Fayra Wiki locally..."
echo "========================================="

# Background process to wait for VitePress to start up, then open the browser
(
  # Loop until the local server responds (connection success)
  while ! curl -s -o /dev/null http://localhost:5173; do
    sleep 0.5
  done
  echo "Server is ready! Opening http://localhost:5173 in browser..."
  open "http://localhost:5173"
) &

# Run the development server
npm run wiki:dev
