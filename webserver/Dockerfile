FROM nginx:alpine

# RUN apk update && \
#   apk add --no-cache \
#   alpine-sdk \
#   bash \
#   gnupg \
#   nodejs

# RUN mkdir /opt /opt/yarn && \
#   cd /opt/yarn && \
#   wget https://yarnpkg.com/latest.tar.gz && \
#   tar -zxf latest.tar.gz

# ENV PATH "$PATH:/opt/yarn/dist/bin"

COPY ./sites-enabled/default.conf /etc/nginx/conf.d/default.conf
# RUN mkdir /www /www/static

# COPY . /hots-frontend

# WORKDIR /hots-frontend

# RUN yarn install --pure-lockfile

# # needs to be set here
# # Otherwise Yarn won't install the devDependencies
# ENV NODE_ENV production

# RUN node --version && npm run build && cp -r /hots-frontend/dist /www/static/hots-frontend

EXPOSE 443
