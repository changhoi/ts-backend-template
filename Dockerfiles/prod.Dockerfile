FROM node:12.16.1-alpine AS builder
WORKDIR /usr/src/app

COPY .envs/prod.env ./.env
COPY webpack.config.js .
COPY tsconfig.json .

COPY package.json .
COPY yarn.lock .

COPY src ./src

RUN yarn install
RUN yarn build:prod

FROM node:12.16.1-alpine
COPY --from=builder /usr/src/app/dist ./dist
COPY package.json .
COPY yarn.lock .

RUN yarn install --production

EXPOSE 80

CMD ["yarn", "start"]
