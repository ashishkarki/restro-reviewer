#!/bin/bash

# stop all containers
docker stop $(docker ps -a -q)

# remove all stopped containers
docker rm $(docker ps -a -q)

# remove all unused images, not just dangling ones
docker image prune -a -f

# remove all unused volumes
docker volume prune -f

# remove all unused networks
docker network prune -f

# optionally, rebuild images without cache
docker-compose build --no-cache