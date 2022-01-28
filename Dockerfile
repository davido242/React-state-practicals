# pull the official base image
FROM node:10-alpine AS builder
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# add app
COPY . ./

#expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]