FROM node:20

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

CMD [ "sh" ,"-c","node index.js" ]

EXPOSE 8080