FROM node:20.10.0

# set the working directory within the docker container
WORKDIR /usr/src/app

# copy the package/package-lock.json files from local machine to the working directory in the docker container
COPY package*.json yarn*.json ./

# install the dependencies within the docker container
RUN yarn install
# also install nest cli globally within the docker container
RUN yarn global add @nestjs/cli

# also copy the entire workspace so we have all nest etc packages
COPY . .

# Set the work directory to /app
# WORKDIR /usr/src/app

# build the project
RUN yarn build

# expose the port 4000 in the docker container
# EXPOSE 4000

# run the command to start the app
# WORKDIR /usr/src
CMD [ "yarn", "start:dev" ]
