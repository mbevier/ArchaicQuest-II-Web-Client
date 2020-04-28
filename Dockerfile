# base image
FROM node:12.2.0

WORKDIR app

RUN npm install
RUN npm update

# add app
COPY . . 

EXPOSE 4200
# start app
CMD ng serve --host 0.0.0.0
