#!/bin/sh

set -e

if [ ! -f node_modules/.bin/vite ]; then
    echo "Installing dependencies..."
    pnpm install
fi

echo "Starting Vite..."

exec "$@"