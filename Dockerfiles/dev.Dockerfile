FROM node:12.16.1-alpine AS builder
WORKDIR /usr/src/app

COPY .envs/dev.env ./.env
COPY webpack.config.js .
COPY tsconfig.json .

COPY package.json .
COPY yarn.lock .

COPY src ./src

RUN ls -l

RUN yarn install
RUN yarn build:dev

FROM node:12.16.1-alpine
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json .

EXPOSE 80

CMD ["yarn", "start"]
