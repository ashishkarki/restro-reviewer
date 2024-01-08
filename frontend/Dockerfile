# Step 1: Build the application
FROM node:20.10.0 AS build

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

# install the dependencies within the docker container
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# copy config file containing API_URL etc
COPY config.json /app/build/config.json

# Step 2: Serve the application
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]