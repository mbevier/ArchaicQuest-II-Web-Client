# base image
FROM node:12.7-alpine as builder
WORKDIR '/app'
COPY package.json ./

RUN npm install

COPY . . 
RUN npm run build

EXPOSE 4200
# start app
CMD ng serve --host 0.0.0.0
