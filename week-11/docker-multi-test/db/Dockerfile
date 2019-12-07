FROM mysql:5.7

ENV MYSQL_DATABASE dockertest
ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_USER mysql
ENV MYSQL_PASSWORD password
ENV DATABASE_HOST db

EXPOSE 3306

COPY ./sql-scripts /docker-entrypoint-initdb.d/

# building this docker image: $ docker build -t akijakya/docker-mysql-test:v0 .