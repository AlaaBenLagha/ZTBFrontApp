# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18.15.0 AS build

WORKDIR /app
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest AS ngi
COPY --from=build /app/dist/ztbfront-app /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80




# # Step 1: Build the Angular app in a node image
# FROM node:18.15.0 AS build

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Step 2: Run the application
# FROM node:18.15.0
# WORKDIR /app
# COPY --from=build /app .
# RUN npm install
# EXPOSE 4200
# CMD ["npm", "start"]

# # Step 3: Setup the NGINX server
# FROM nginx:alpine
# COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/dist /usr/share/nginx/html
