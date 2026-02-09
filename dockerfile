FROM node:18-alpine

WORKDIR /app

# Copy project files
COPY . .

# Install a simple HTTP server to serve static files
RUN npm install -g http-server

# Expose port
EXPOSE 8080

# Start the server
CMD ["http-server", "-p", "8080", "-c-1"]
