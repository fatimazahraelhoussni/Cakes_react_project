# Use an official Node.js runtime as a base image
FROM node:lts-alpine3.18 as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a smaller base image for the production build
FROM nginx:alpine

# Copy the built artifacts from the builder stage to the nginx web root
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the Nginx configuration
COPY deploy/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]