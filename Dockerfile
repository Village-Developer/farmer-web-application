# build stage
FROM node:latest as build-stage

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN npm run build

# production stage
FROM nginx:latest as production-stage

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]