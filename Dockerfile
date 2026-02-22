FROM node:20.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9002

# Start the production server
CMD ["npm", "run", "start"]