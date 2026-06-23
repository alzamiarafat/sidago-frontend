FROM node:20.19.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG NEXT_PUBLIC_STRAPI_URL
ARG STRAPI_API_TOKEN
ENV NEXT_PUBLIC_STRAPI_URL=$NEXT_PUBLIC_STRAPI_URL
ENV STRAPI_API_TOKEN=$STRAPI_API_TOKEN

RUN npm run build

EXPOSE 9010

# Start the production server
CMD ["npm", "run", "start"]