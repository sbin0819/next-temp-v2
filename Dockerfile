FROM node 

WORKDIR /usr/src/app 

COPY package*.json ./

RUN yarn install -y 

COPY . . 

EXPOSE 3000 

CMD [ "yarn", "dev"]
