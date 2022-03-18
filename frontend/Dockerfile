FROM node:17-alpine

WORKDIR /app      

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent
RUN npm install --save react-toastify

COPY . ./

CMD ["npm", "start"]