CREATE DATABASE todoapp;

CREATE TABLE
  todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    Progress INT,
    date VARCHAR(300)
  );

CREATE TABLE
  users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
  );

INSERT INTO
  todos (id, user_email, title, progress, date)
VALUES
  (
    0,
    "farnooshmoayeri@gmail.com",
    "First todo",
    10,
    "
Wed May 31 2023 19:39:20 GMT+0100 (British Summer Time)"
  )