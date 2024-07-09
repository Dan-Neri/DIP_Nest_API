FROM --platform=linux/amd64 node:18-alpine as build
WORKDIR /cwc/dip/frontend
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:latest as prod
COPY --from=build /cwc/dip/frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]