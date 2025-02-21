# Use an official Node.js image as a base image
FROM node:lts-alpine3.20

# Set the working directory in the container
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package.json ./

# Install production dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Generate the Prisma client (if needed)
# RUN npx prisma generate

# Expose the port your app will run on
EXPOSE 4000

# (Optional) Run pending Prisma migrations before starting the app
# RUN npx prisma migrate deploy

# Start the application
CMD ["npm", "start"]