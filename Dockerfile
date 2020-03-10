FROM node:13
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm install -g nodemon
# CMD [ npm run migrate ]
CMD [ "nodemon", "index.js" ]
