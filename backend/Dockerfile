FROM node:14.15.5-alpine3.10

COPY . .
RUN npm install --production

RUN npm install pm2 -g

EXPOSE 3000
CMD ["pm2-runtime", "start.js"]
