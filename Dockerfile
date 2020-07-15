## 1. Build the application
FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# /app/build

## 2. Deploy the application to nginx
FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html