FROM nginx:latest

RUN mkdir -p ./data/nginx/cache


ENV APP_ROOT .

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}