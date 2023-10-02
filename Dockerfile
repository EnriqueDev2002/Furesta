FROM node:18

WORKDIR /usr/src/app

COPY . .
RUN npm install --production 
RUN npm install -D tailwindcss postcss autoprefixer
RUN npx tailwindcss init -p
RUN npm run build
CMD ["npm", "start"]