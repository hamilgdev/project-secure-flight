ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine AS base-image

# Set working directory
ENV APP_HOME /app
WORKDIR $APP_HOME

COPY ./package.json ./package-lock.json ./tsconfig.json $APP_HOME/
RUN npm ci

# build dependencies
FROM base-image AS builder-image

# Set working directory
ENV APP_HOME /app
WORKDIR $APP_HOME

COPY . .
RUN npm run build
RUN npm prune --production

# production image
FROM node:${NODE_VERSION}-alpine AS production-image

# Set working directory
ENV APP_HOME /app
WORKDIR $APP_HOME

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

COPY --from=builder-image --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder-image /app/node_modules ./node_modules
COPY --from=builder-image /app/package.json ./package.json
COPY --from=builder-image /app/public ./public

EXPOSE 3000
CMD [ "npm", "start" ]
