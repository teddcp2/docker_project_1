# docker_project_1

- Its an express app which will just return a message and is running via a docker container
- DockerFile and docker-compose file are added too..

### DockerFile

```
From node:alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY . .

CMD [ "npm", "start" ]

```

### docker-compose.yml

```
version : "3"

services :
  webapp:
    build:
      context: .
      dockerfile: DockerFile
    ports:
      - 8080:80

```

### Screenshot

![image](https://github.com/teddcp2/docker_project_1/blob/master/screenshot.JPG)

Thanks for Reading :)
Tedd
