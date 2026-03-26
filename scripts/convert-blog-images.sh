#!/usr/bin/env bash
# Convert blog images to WebP 1200x630 for Eddie Miller Agency
#
# Usage:
#   ./scripts/convert-blog-images.sh [source_dir]
#
# Drop your generated images (PNG, JPG, JPEG, WEBP) into source_dir
# (defaults to public/images/blog/raw/).
# The script will resize to 1200x630, convert to WebP quality 80,
# and output to public/images/blog/.
#
# Image names should match article slugs, e.g.:
#   cabinet-dentaire-invisible-chatgpt.png → cabinet-dentaire-invisible-chatgpt.webp

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
SOURCE_DIR="${1:-$PROJECT_DIR/public/images/blog/raw}"
OUTPUT_DIR="$PROJECT_DIR/public/images/blog"

# Create dirs if needed
mkdir -p "$SOURCE_DIR" "$OUTPUT_DIR"

# Check dependencies
if ! command -v cwebp &>/dev/null; then
  echo "Error: cwebp not found. Install with: brew install webp"
  exit 1
fi

if ! command -v sips &>/dev/null; then
  echo "Error: sips not found (should be built-in on macOS)"
  exit 1
fi

COUNT=0

shopt -s nullglob nocaseglob
for img in "$SOURCE_DIR"/*.png "$SOURCE_DIR"/*.jpg "$SOURCE_DIR"/*.jpeg "$SOURCE_DIR"/*.webp; do
  [ -f "$img" ] || continue

  filename=$(basename "$img")
  slug="${filename%.*}"
  output="$OUTPUT_DIR/$slug.webp"

  # Skip if already converted and newer than source
  if [ -f "$output" ] && [ "$output" -nt "$img" ]; then
    echo "  skip: $slug.webp (already up to date)"
    continue
  fi

  echo "  convert: $filename → $slug.webp"

  # Create temp file for resize
  tmp="/tmp/ema-resize-$slug.png"

  # Resize to 1200x630 using macOS sips (crop to fill)
  cp "$img" "$tmp"
  sips --resampleHeightWidth 630 1200 "$tmp" --out "$tmp" &>/dev/null

  # Convert to WebP quality 80
  cwebp -q 80 -resize 1200 630 "$tmp" -o "$output" &>/dev/null

  rm -f "$tmp"
  COUNT=$((COUNT + 1))
done

if [ $COUNT -eq 0 ]; then
  echo ""
  echo "No images to convert."
  echo "Drop your PNG/JPG/WEBP files into:"
  echo "  $SOURCE_DIR"
  echo ""
  echo "Name them after the article slug, e.g.:"
  echo "  cabinet-dentaire-invisible-chatgpt.png"
else
  echo ""
  echo "Done! Converted $COUNT image(s) to $OUTPUT_DIR"
fi
