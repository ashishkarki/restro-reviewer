FROM node:20.10.0

# set the working directory within the docker container
WORKDIR /usr/src/app

# copy the package/package-lock.json files from local machine to the working directory in the docker container
COPY package*.json ./

# install the dependencies within the docker container
RUN npm install

# copy everything from the local machine to the working directory in the docker container
COPY . .

# build the project
RUN npm run build

# expose the port 4000 in the docker container
EXPOSE 4000

# run the command to start the app
CMD [ "npm", "run", "start:prod" ]