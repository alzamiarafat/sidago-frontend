FROM node:20.19.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9010

# Start the production server
CMD ["npm", "run", "start"]