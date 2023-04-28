CREATE TABLE alunos (
    id int primary key not null,
    nome varchar(30) not null,
    sobrenome varchar(30),
    periodo int not null,
    observacao varchar(100)
);

CREATE TABLE users (
    id SERIAL primary key,
    username TEXT not null unique,
    salt text not null,
    password text not null
);