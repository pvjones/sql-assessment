SELECT * FROM vehicles INNER JOIN users ON (vehicles.ownerid = users.id)
WHERE email LIKE $1