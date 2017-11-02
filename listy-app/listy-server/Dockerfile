FROM node:latest

ENV http_proxy "http://proxy.tcs.com:8080"
ENV https_proxy "http://proxy.tcs.com:8080"

RUN mkdir -p /srv/listy-server

WORKDIR /srv/listy-server

COPY package.json /srv/listy-server

RUN npm install

COPY . /srv/listy-server

EXPOSE 4000

CMD ["npm", "start"]
