DROP DATABASE IF EXISTS d13backend;
CREATE DATABASE d13backend;

\c d13backend;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    nameOfUser VARCHAR NULL,
    username VARCHAR UNIQUE NULL,
    title VARCHAR NULL,
    profileUrl VARCHAR NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE endorsements (
    id SERIAL PRIMARY KEY NOT NULL, 
    personEndorsingId INT REFERENCES users(id) NOT NULL,
    personBeingEndorsedId INT REFERENCES users(id) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL,
    userId INT REFERENCES users(id) NOT NULL, 
    imageUrl VARCHAR NULL,
    caption VARCHAR NOT NULL,
    numberOfComments INT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY NOT NULL, 
    postId INT REFERENCES posts(id) NOT NULL,
    userId INT REFERENCES users(id) NOT NULL,
    commentText TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE followers (
    id SERIAL PRIMARY KEY NOT NULL,
    personFollowingId INT REFERENCES users(id) NOT NULL, 
    personBeingFollowed INT REFERENCES users(id) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
); 


CREATE TABLE newspapers (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE  tvShows (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE userpreference (
    id SERIAL PRIMARY KEY NOT NULL, 
    userId INT REFERENCES users(id) NOT NULL,
    newstype_1 INT REFERENCES newspapers(id) NULL,
    newstype_2 INT REFERENCES newspapers(id) NULL,
    newstype_3 INT REFERENCES newspapers(id) NULL,
    tvtype_1 INT REFERENCES tvShows(id) NULL,
    tvtype_2 INT REFERENCES tvShows(id) NULL,
    tvtype_3 INT REFERENCES tvShows(id) NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);



