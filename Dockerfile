# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /test-aos

# add `/test-aos/node_modules/.bin` to $PATH
ENV PATH /test-aos/node_modules/.bin:$PATH

# install test-aos dependencies
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add test-aos
COPY . ./

EXPOSE 80

# start test-aos
CMD ["npm", "start"]
