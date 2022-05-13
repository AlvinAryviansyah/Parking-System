FROM node

RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install

RUN npm run build

WORKDIR /dist

CMD node src/app.js
