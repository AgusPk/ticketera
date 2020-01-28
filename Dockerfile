FROM node
WORKDIR /ticketera
COPY package.json package.json
COPY webpack.config.js webpack.config.js
COPY seed.js seed.js

RUN ["npm", "i"]

CMD ["npm", "run", "dev"]

EXPOSE 80
