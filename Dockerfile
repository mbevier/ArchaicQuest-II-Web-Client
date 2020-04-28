# base image
FROM node:alpine as builder
WORKDIR '/app'

RUN npm install
COPY . . 
RUN npm run build

EXPOSE 4200
# start app
CMD ng serve --host 0.0.0.0
