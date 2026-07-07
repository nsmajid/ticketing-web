#!/bin/sh

set -e

if [ ! -f node_modules/.bin/vite ]; then
    echo "Installing dependencies..."
    pnpm install --frozen-lockfile
fi

echo "Starting Vite..."

exec "$@"