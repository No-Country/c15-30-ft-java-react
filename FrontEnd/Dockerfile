FROM node:18-añpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]