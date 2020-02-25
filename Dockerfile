FROM node:13
WORKDIR /usr/src/app
# COPY package*.json ./
VOLUME  . 
#RUN npm install
CMD [ "node", "index.js" ]
