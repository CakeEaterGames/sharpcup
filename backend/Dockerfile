# Use the official Bun image
FROM oven/bun:1.0.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and lockfile (if using Bun's lockfile)
COPY package.json bun.lock ./
# COPY package.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the TypeScript project (if applicable)
# RUN bun run build

# Command to run the application
CMD ["bun", "dev"]