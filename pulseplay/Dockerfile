FROM node:carbon

WORKDIR /home/project/pulseplay

COPY package*.json ./

RUN apt-get update || : && apt-get install python -y

RUN apt-get install -y graphicsmagick

RUN apt-get install -y ffmpeg

RUN npm install

COPY . .

EXPOSE 10001

CMD [ "node", "init-server.js" ]