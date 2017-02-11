SELECT * FROM vehicles INNER JOIN users ON (vehicles.ownerid = users.id)
WHERE firstname LIKE $1