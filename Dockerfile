FROM node:18.13.0-alpine

ENV HOME=/app
WORKDIR $HOME

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 1000

CMD [ "npm", "start" ]