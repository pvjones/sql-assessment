UPDATE vehicles
SET 
  ownerid = COALESCE($1, ownerid)
WHERE id = $2
RETURNING *;