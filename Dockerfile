# The base image to build. Define the context name for the build stage. 
FROM node:20-alpine as builder

# The build work directory. 
WORKDIR /opt/app

# Copy the source code into the Docker image to be used for compiling. 
COPY data /opt/app/data
COPY public /opt/app/public
COPY src /opt/app/src
COPY index.html package-lock.json package.json vite.config.js /opt/app/

# Compile the Vite application. 
RUN npm install && npm run build

# The base image to package. This is a multi-stage build using a new context. 
FROM node:20-alpine

# Setup a non-root user with user privileges instead of root privileges. 
RUN adduser -D myuser || true
RUN addgroup usergroup || true; adduser --ingroup usergroup --disabled-password myuser || true; 

# The deployment work directory. 
WORKDIR /opt/app

# Install a simple http server to serve static content. 
RUN npm install -g http-server

# As a security best practice, switch to a non-root user with user privileges instead of root privileges. 
# The USER Dockerfile instruction sets the preferred user name (or UID) and optionally the user group (or GID) while running the image — and for any subsequent RUN, CMD, or ENTRYPOINT instructions. 
# Change the user to the myuser user. 
USER myuser

# Expose the application port. This is the port that the application listens on for incoming requests. 
# ENV PORT=4173
ENV PORT=8080
EXPOSE $PORT

# Copy the Vite dist folder generated from the builder context into the Docker image. 
# Docker uses caching to speed up builds by reusing layers from previous builds. 
# To take advantage of caching, you should order your Dockerfile instructions so that the ones that change frequently are placed towards the end of the file. 
# For example, if you’re copying files into the image, you should do that at the end of the Dockerfile. 
COPY --from=builder /opt/app/dist /opt/app/dist

# Set the default command to run the Java application. 
# The ENTRYPOINT instruction specifies the command that should be run. The CMD instruction provides default arguments to the ENTRYPOINT command. 
# ENTRYPOINT ["/bin/bash"]

# The CMD instruction provides default arguments to the ENTRYPOINT command.
# Serve the application using the http-server package.
# CMD ["npm", "run", "preview", "--port 4173", "--host 0.0.0.0"]
CMD ["http-server", "dist", "-p", "8080"]