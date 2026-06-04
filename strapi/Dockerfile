FROM node:20.19.0-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN mkdir -p /app/public/uploads

RUN npm run build

EXPOSE 9012

CMD ["npm", "run", "start"]