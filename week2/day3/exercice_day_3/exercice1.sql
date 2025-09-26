SELECT * FROM language;

SELECT film.title, film.description, language.name FROM film
JOIN language ON film.language_id = language.language_id;

SELECT film.title, film.description, language.name FROM language LEFT JOIN film ON film.language_id = language.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO new_film (name) VALUES
('Film A'),
('Film B'),
('Film C');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255),
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
 VALUES (1, 1, 'Great Review', 9, 'Very enjoyable movie, highly recommended.'),
(2, 2, 'Good but could be better', 7, 'The movie is good but the story is not very strong.');

DELETE FROM new_film WHERE id = 1;
--Since customer_review.film_id references new_film.id with ON DELETE CASCADE, deleting a film from new_film will automatically delete all related reviews in the customer_review table
