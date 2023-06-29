# Step 1: Build the Angular app in a node image
FROM node:18.15.0 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Run the application
FROM node:18.15.0
WORKDIR /app
COPY --from=build /app .
RUN npm install
EXPOSE 4200
EXPOSE 3000
CMD ["npm", "start"]
