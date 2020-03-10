FROM node:13
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm install -g nodemon
# RUN npm run migrate
CMD [ "npm", "start" ]
