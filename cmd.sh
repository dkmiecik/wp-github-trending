#!/bin/bash

init() {
    down
    git clone https://github.com/huchenme/github-trending-api github-trending-api
    docker build -t github-trending-api ./github-trending-api
    docker run -d --rm -p 8000:8888 github-trending-api:latest
    npm run dev
}

down() {
    docker-compose down
}
