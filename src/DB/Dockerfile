FROM postgres:15.2-alpine

COPY init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_USER admin
ENV POSTGRES_PASSWORD 123456
ENV POSTGRES_DB horus