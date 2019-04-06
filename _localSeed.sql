
DROP DATABASE IF EXISTS d13backend;
CREATE DATABASE d13backend;

\c d13backend;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    nameofuser VARCHAR NOT NULL,
    username VARCHAR UNIQUE NOT NULL,
    title VARCHAR NULL,
    profileurl VARCHAR NULL,
    zipcode VARCHAR NOT NULL,
    firebaseUID VARCHAR NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

/*CREATE TABLE politicians (
    id SERIAL PRIMARY KEY NOT NULL,
    campemail VARCHAR UNIQUE NOT NULL,
    nameofuser VARCHAR NOT NULL,
    username VARCHAR UNIQUE NOT NULL,
    title VARCHAR NULL,
    profileurl VARCHAR NULL,
    representing VARCHAR NOT NULL,
    firebaseUID VARCHAR NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);*/

CREATE TABLE statusUpdates (
    id SERIAL PRIMARY KEY NOT NULL,
    poster INT REFERENCES users(id) NOT NULL, 
    post VARCHAR NULL, 
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE TABLE endorsements (
    id SERIAL PRIMARY KEY NOT NULL, 
    endorsing INT REFERENCES users(id) NOT NULL,
    endorsed INT REFERENCES users(id) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL,
    userId INT REFERENCES users(id) NOT NULL, 
    imageUrl VARCHAR NULL,
    caption VARCHAR NOT NULL,
    numberofcomments INT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY NOT NULL, 
    postid INT REFERENCES posts(id) NOT NULL,
    userid INT REFERENCES users(id) NOT NULL,
    commenttext TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE followers (
    id SERIAL PRIMARY KEY NOT NULL,
    follower INT REFERENCES users(id) NOT NULL, 
    followed INT REFERENCES users(id) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
); 


/*CREATE TABLE newspapers (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);*/

/*CREATE TABLE  tvShows (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);*/

CREATE TABLE userpreferenceTopics (
    id SERIAL PRIMARY KEY NOT NULL, 
    userid INT REFERENCES users(id) NOT NULL,
    topic_1 VARCHAR NULL,
    topic_2 VARCHAR NULL,
    topic_3 VARCHAR NULL,
    topic_4 VARCHAR NULL,
    topic_5 VARCHAR NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE userpreferenceTV (
    id SERIAL PRIMARY KEY NOT NULL, 
    userid INT REFERENCES users(id) NOT NULL,
    tvtype_1 VARCHAR NULL,
    tvtype_2 VARCHAR NULL,
    tvtype_3 VARCHAR NULL,
    tvtype_4 VARCHAR NULL,
    tvtype_5 VARCHAR NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY NOT NULL, 
    sender INT REFERENCES users(id) NOT NULL,
    receiver VARCHAR NOT NULL,
    what VARCHAR NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

/*INSERT INTO users (email, nameofuser, username, title, profileurl, borough) VALUES
('mo@pursuit.com', 'Mo', 'MoMoney', 'Citizen', 'mo.png', 'manhattan'),
('mo1@pursuit.com', 'Mo1', 'MoMoney1', 'Politican', 'mo1.png', 'queens');


INSERT INTO endorsements (endorsing, endorsed) VALUES
(1,2);

INSERT INTO posts (userid, imageurl, caption, numberofcomments) VALUES
(1,'beach.png', 'i want to be here', 3);

INSERT INTO comments (postid, userid, commenttext) VALUES
(1, 1, 'i hate it here'),
(1, 2, 'i love it here');

INSERT INTO followers (follower, followed) VALUES
(1,2);

INSERT INTO newspapers (title) VALUES
('New York Times');

INSERT INTO tvShows (title) VALUES
('Morning Joe');

INSERT INTO userpreference (userid, topic_1, tvtype_1) VALUES
(1,sports, 1);*/


