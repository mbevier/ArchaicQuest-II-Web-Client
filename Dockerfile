# base image
FROM node:12.7-alpine as builder
WORKDIR '/app'
COPY package.json ./

RUN npm install

COPY . . 
RUN npm run build --prod

FROM nginx:1.15.8-alpine
EXPOSE 4200
COPY --from=builder /app/dist/ArchaicQuestII-Client/ /usr/share/nginx/html
