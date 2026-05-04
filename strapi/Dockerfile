FROM node:20.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p /app/public/uploads

RUN npm run build

EXPOSE 9001

CMD ["sh", "-c", "mkdir -p /app/public/uploads && npm run start"]
