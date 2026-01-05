FROM cypress/base:latest

WORKDIR /home/wdio/

RUN apt-get update && apt install -y default-jre

COPY . /home/wdio/

VOLUME [ "/home/cypress/allure-report" ]

RUN npm install

CMD [ "npm", "run", "test:allure" ]