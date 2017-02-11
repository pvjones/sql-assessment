-- It may be helpful to drop and reinstantilize the table when doing
-- the tests in case you delete users/cars the tests are expecting to see

CREATE TABLE IF NOT EXISTS vehicles (
  id SERIAL PRIMARY KEY,
  make VARCHAR(40),
  model VARCHAR(40),
  year INTEGER,
  ownerid INTEGER
);

INSERT INTO vehicles
(make, model, year, ownerid)
VALUES
('Toyota', 'Camry', 1991, 1),
('Honda', 'Civic', 1995, 1),
('Ford', 'Focus', 2005, 1),
('Ford', 'Taurus', 2003, 2),
('VW', 'Bug', 2010, 2),
('Mini', 'Coup', 2013, 3);
