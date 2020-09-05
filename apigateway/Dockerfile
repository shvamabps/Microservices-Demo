FROM node:12

COPY . /opt/app

WORKDIR /opt/app


RUN yarn

CMD ["yarn watch","chmod rwx /opt/app"]