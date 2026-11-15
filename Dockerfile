# Compilar Angular con las dependencias fijadas en package-lock.json.
FROM node:24-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production --output-path=dist/alpha-bike

# Servir únicamente los archivos compilados.
FROM nginx:stable-alpine

ENV PORT=10000

COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist/alpha-bike/browser/ /usr/share/nginx/html/

EXPOSE 10000

CMD ["nginx", "-g", "daemon off;"]
