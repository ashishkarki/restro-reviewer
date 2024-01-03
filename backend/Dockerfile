FROM node:20.10.0

# set the working directory within the docker container
WORKDIR /usr/src/app

# copy the package/package-lock.json files from local machine to the working directory in the docker container
COPY package*.json pnpm-lock.yaml ./

# install the dependencies within the docker container
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# copy the whole of backend to the working directory in the docker container
COPY . .

# build the project
RUN pnpm run build

# expose the port 4000 in the docker container
EXPOSE 4000

# run the command to start the app
CMD [ "pnpm", "run", "start:prod" ]