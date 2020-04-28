# base image
FROM node:alpine as builder
WORKDIR '/app'
COPY /package.json ./

RUN npm install
RUN npm update
COPY . . 
RUN npm run build

EXPOSE 4200
# start app
CMD ng serve --host 0.0.0.0
