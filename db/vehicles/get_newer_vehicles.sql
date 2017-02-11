SELECT * FROM vehicles INNER JOIN users ON (vehicles.ownerid = users.id)
WHERE year > 2000
ORDER BY year DESC