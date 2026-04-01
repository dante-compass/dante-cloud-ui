FROM nginx:latest

LABEL cn.herodotus.image.authors="herodotus@aliyun.com"

# 验证realip模块
RUN nginx -V 2>&1 | grep -o with-http_realip_module && \
    echo "RealIP module is available"

# 以下参数为传递给 Nginx conf 环境变量
ENV LISTEN_PORT=8000
ENV SERVER_NAME=localhost
ENV HERODOTUS_SERVER_ADDR=192.168.101.10:8847
# 以下参数先传递给 environment.js，然后通过 environment.js 传递给 Vue 环境变量
ENV HERODOTUS_SERVER_PROJECT=dante
ENV HERODOTUS_APPLICATION_NAME='Herodotus Cloud'
ENV HERODOTUS_OAUTH2_CLIENT_ID='14a9cf797931430896ad13a6b1855611'
ENV HERODOTUS_OAUTH2_CLIENT_SECRET='a05fe1fc50ed42a4990c6c6fc4bec398'
ENV HERODOTUS_OAUTH2_REDIRECT_URI='http://192.168.101.10:3000/authorization-code'
ENV HERODOTUS_OAUTH2_AUTHORIZE_URI=''
ENV HERODOTUS_USE_DISABLE_DEVTOOL=true
# 以下参数传递给 application.yml 环境变量
ENV HERODOTUS_GITEE_SOCIAL_REDIRECT_URI='http://localhost:8000/preview/social/oauth2/callback/GITEE'

COPY dist/  /etc/nginx/html/ui
COPY favicon.ico  /etc/nginx/html/ui
COPY template.conf /etc/nginx/templates/default.conf.template
COPY entrypoint.sh /

RUN chmod 777 /entrypoint.sh

EXPOSE 8000

CMD /entrypoint.sh && /docker-entrypoint.sh nginx -g 'daemon off;'