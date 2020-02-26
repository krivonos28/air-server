FROM node:13
WORKDIR /usr/src/app
RUN npm install && npm install -g nodemon
CMD [ "nodemon", "index.js" ]
