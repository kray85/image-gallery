FROM node:lts-alpine3.20

LABEL maintainer="tetradigitalguy.com" 

WORKDIR /app

EXPOSE 5173

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

RUN npm run build

CMD [ "npm", "run", "dev"]