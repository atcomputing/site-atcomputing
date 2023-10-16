FROM klakegg/hugo:0.111.3-ext-alpine-onbuild AS hugo

FROM nginx
COPY --from=hugo /target /usr/share/nginx/html