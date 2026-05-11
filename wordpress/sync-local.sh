#!/usr/bin/env bash
set -euo pipefail

REPO_THEME_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/wp-content/themes/ebox" && pwd)"
LOCAL_THEME_DIR="/Users/jason/Local Sites/ebox/app/public/wp-content/themes/ebox"

mkdir -p "$LOCAL_THEME_DIR"
rsync -a --delete "$REPO_THEME_DIR/" "$LOCAL_THEME_DIR/"

echo "Synced eBox theme to $LOCAL_THEME_DIR"
