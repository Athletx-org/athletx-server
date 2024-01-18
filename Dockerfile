FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN mkdir uploads
RUN npm install
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD [ "node", "src/app.js" ]
