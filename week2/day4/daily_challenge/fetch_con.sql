DROP TABLE IF EXISTS countries;
CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    capital VARCHAR(100),
    flag TEXT,
    subregion VARCHAR(100),
    population BIGINT
);
