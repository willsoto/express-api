FROM node:alpine

RUN apk update && \
  apk add --no-cache \
  alpine-sdk \
  bash \
  gnupg

RUN mkdir /opt /opt/yarn && \
  cd /opt/yarn && \
  wget https://yarnpkg.com/latest.tar.gz && \
  tar -zxf latest.tar.gz

ENV PATH "$PATH:/opt/yarn/dist/bin"

ADD . /app
WORKDIR /app

RUN yarn install --frozen-lockfile && yarn global add nodemon

EXPOSE 3000
