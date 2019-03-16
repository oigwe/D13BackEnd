DROP DATABASE IF EXISTS d13backend;
CREATE DATABASE d13backend;

\c d13backend;

CREATE TABLE users (
    id VARCHAR UNIQUE PRIMARY KEY NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    name VARCHAR NULL,
    username VARCHAR UNIQUE NULL,
    title VARCHAR NULL,
    profileUrl VARCHAR NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE TABLE endorsements (
    id SERIAL PRIMARY KEY UNIQUE, 
    person_endorsing_id VARCHAR REFERENCES users(id) NOT NULL,
    person_being_endorsed_id VARCHAR REFERENCES user(id) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE TABLE posts (
    id SERIAL PRIMARY KEY UNIQUE,
    user_id VARCHAR REFERENCES users(id) NOT NULL, 
    image_url VARCHAR NULL,
    caption VARCHAR NOT NULL,
    numberOfComments INT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE TABLE comments (
    id SERIAL PRIMARY KEY UNIQUE, 
    post_id INT REFERENCES posts(id) NOT NULL,
    user_id VARCHAR REFERENCES users(id) NOT NULL,
    commentText TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE TABLE Followers (
    id SERIAL PRIMARY KEY UNIQUE,
    person_following_id VARCHAR REFERENCES users(id) NOT NULL, 
    person_being_followed VARCHAR REFERENCES users(id) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
) 

CREATE TABLE newspapers (
    id SERIAL PRIMARY KEY UNIQUE,
    title VARCHAR NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
) 

CREATE TABLE  shows (
    id SERIAL PRIMARY KEY UNIQUE,
    title VARCHAR NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE TABLE userPreference (
    id SERIAL PRIMARY KEY UNIQUE, 
    user_id  VARCHAR REFERENCES users(id),
    newstype_1 INT REFERENCES newspapers(id) NULL,
    newstype_2 INT REFERENCES newspapers(id) NULL,
    newstype_2 INT REFERENCES newspapers(id) NULL,
    tvtype_1 INT REFERENCES tv(id) NULL,
    tvtype_2 INT REFERENCES tv(id) NULL,
    tvtype_3 INT REFERENCES tv(id) NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
)
  
