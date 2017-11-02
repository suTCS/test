FROM node:latest

ENV http_proxy "http://proxy.tcs.com:8080"
ENV https_proxy "http://proxy.tcs.com:8080"

RUN mkdir -p /srv/listy-client

WORKDIR /srv/listy-client

COPY package.json /srv/listy-client

RUN npm install

COPY . /srv/listy-client

EXPOSE 3000

CMD ["npm", "start"]
