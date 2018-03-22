FROM node:latest

ADD . /app/
WORKDIR /app

RUN npm install
RUN npm run build

CMD ["node", "server.js"]