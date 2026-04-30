FROM node:20.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9001

CMD ["npm", "run", "start"]
