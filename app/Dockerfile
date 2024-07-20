# Stage 1: Build the React app
FROM node:16-alpine AS build

# Install dependencies for building the React app
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app using a lightweight web server
FROM nginx:alpine

# Copy the build output to the NGINX html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Generate SSH key pair
RUN apk add --no-cache openssh
RUN ssh-keygen -t rsa -b 4096 -f /root/.ssh/id_rsa -N "" -C "gitlab-ci@gitlab.com"

# Display the public key (for copying to GitLab and Linode)
CMD cat /root/.ssh/id_rsa.pub && nginx -g 'daemon off;'