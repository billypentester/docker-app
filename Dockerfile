FROM node:latest

WORKDIR /home/todo/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]