# 
# Build stage.
# This state builds our TypeScript and produces an intermediate Docker image containing the compiled JavaScript code.
#
FROM node:lts-alpine as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile --silent

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN yarn build

#
# Production stage.
# This stage pulls the compiled JavaScript code from the stage 1 intermediate image.
# This stage builds the final Docker image that we'll use in production.
#
FROM node:lts-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --prod --frozen-lockfile --silent

COPY --from=build /app/.next ./.next
COPY _files ./_files


RUN npm install pm2 -g

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start"]
