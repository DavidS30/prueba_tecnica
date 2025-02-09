FROM node:20 AS build-stage
WORKDIR /app

COPY package*.json ./
RUN npm install -g @ionic/cli
RUN npm install

COPY . .

RUN ionic build --prod

FROM nginx:alpine
COPY --from=build-stage /app/www /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]