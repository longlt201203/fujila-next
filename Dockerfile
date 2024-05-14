# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --frozen-lockfile

# Step 5: Copy the local code to the container
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Migrate database
RUN npm run migrate

# Step 8: Expose the port Next.js will run on
EXPOSE 3000

# Step 9: Command to run the application
CMD ["npm", "start"]
