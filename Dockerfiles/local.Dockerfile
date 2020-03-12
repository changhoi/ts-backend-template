FROM node:12.16.1-alpine
WORKDIR /usr/src/app

EXPOSE 80

CMD ["yarn", "docker:dev"]
