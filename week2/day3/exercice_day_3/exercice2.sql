UPDATE film SET language_id = 2 WHERE film_id IN (1, 3, 5);
--qst_2 : ==> The customer table has foreign keys like store_id and address_id so when inserting these values must already exist in their tables to avoid errors

--qst_3:
DROP TABLE customer_review;
-- ==> we have to make sure that there's no connection between table like customer table through foreingn keys if there is no connection it must be deleted easly

SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

SELECT film.film_id, film.title, film.rental_rate FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

--1st film:The film is about a sumo wrestler, and one of the actors is Penelope Monroe
SELECT title FROM film WHERE description ILIKE '%sumo wrestler%' AND film_id IN (
    SELECT film_id FROM film_actor
    JOIN actor ON film_actor.actor_id = actor.actor_id
    WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe'
);

--2nd film:  A short documentary (less than 1 hour long), rated “R”
SELECT title FROM film WHERE length < 60 AND rating = 'R' AND category_id = (
    SELECT category_id FROM category WHERE name = 'Documentary'
);

--The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005
SELECT DISTINCT film.title FROM rental JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
JOIN customer ON rental.customer_id = customer.customer_id WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'
AND rental.amount > 4;

--The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace
SELECT DISTINCT film.title FROM rental JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
JOIN customer ON rental.customer_id = customer.customer_id WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC
LIMIT 1;


