#!/usr/bin/env bash

set -e  # Exit immediately if a command exits with a non-zero status

echo "Stopping and removing existing container..."
docker compose down gary-bot

echo "Removing old image..."
docker image rm gary-bot-gary-bot || true

echo "Building new image..."
docker build .

echo "Starting container in detached mode..."
docker compose up -d

echo "Update complete."
