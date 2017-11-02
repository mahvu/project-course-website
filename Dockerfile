FROM node:6
RUN git clone https://github.com/mahvu/project-course-website
WORKDIR /project-course-website
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]

