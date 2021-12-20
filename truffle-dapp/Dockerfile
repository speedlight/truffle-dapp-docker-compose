FROM node:14-alpine
WORKDIR /app

# Install Truffle
RUN apk add --no-cache make libc6-compat python2 python3 git
RUN yarn add node-gyp
RUN yarn add truffle
RUN npm config set bin-links false

# Move dependencies files
COPY package-lock.json ./package-lock.json
COPY package.json ./package.json

# Clean Install NPM Dependencies
RUN yarn

# Move dapp files
COPY . ./
