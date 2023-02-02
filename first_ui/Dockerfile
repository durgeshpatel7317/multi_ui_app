FROM nginxinc/nginx-unprivileged:1.19.10-alpine

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist/first_ui /usr/share/nginx/html
EXPOSE 8085
CMD ["nginx", "-g", "daemon off;"]
