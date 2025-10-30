FROM node:current-alpine
WORKDIR /usr/src/app
EXPOSE 3000
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
ENV NODE_ENV=production
CMD node src/index.js
