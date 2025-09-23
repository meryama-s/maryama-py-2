-- ========================
-- DAILY CHALLENGE: ACTORS
-- ========================

-- 1) Create table actors
DROP TABLE IF EXISTS actors;

CREATE TABLE actors(
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (100) NOT NULL,
    birth_date DATE NOT NULL,
    number_oscars SMALLINT NOT NULL
);

-- 2) Insert sample data
INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
VALUES
('Matt', 'Damon', '1970-10-08', 5),
('George', 'Clooney', '1961-05-06', 2),
('Angelina', 'Jolie', '1975-06-04', 1),
('Jennifer', 'Aniston', '1969-02-11', 0);

-- 3) Question 1: Count how many actors are in the table
SELECT COUNT(*) AS total_actors
FROM actors;

-- 4) Question 2: Try to add a new actor with some blank fields
-- This will cause an error because birth_date and number_oscars are NOT NULL
INSERT INTO actors (first_name, last_name)
VALUES ('Tom', 'Hanks');
