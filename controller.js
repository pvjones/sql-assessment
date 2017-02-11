var app = require('./index.js')
var db = app.get('db')
  //Show functions added to the db

exports.getUsers = (req, res, next) => {
  db.users.get_users([], (err, result) => {
    if (err) console.error(err);
    res.status(200).json(result);
  })
};

exports.getVehicles = (req, res, next) => {
  db.vehicles.get_vehicles([], (err, result) => {
    if (err) console.error(err);
    res.status(200).json(result);
  })
};

exports.addUser = (req, res, next) => {
  db.users.add_user([
    req.body.firstname,
    req.body.lastname,
    req.body.email
  ], (err, result) => {
    if (err) console.error(err);
    res.status(200).json(result);
  })
};

exports.addVehicle = (req, res, next) => {
  db.vehicles.add_vehicle([
    req.body.make,
    req.body.model,
    req.body.year
  ], (err, result) => {
    if (err) console.error(err);
    res.status(200).json(result);
  })
};

exports.vehicleCount = (req, res, next) => {
  db.vehicles.get_vehicle_count([parseInt(req.params.userId)], (err, result) => {
    if (err) console.error(err);
    res.status(200).json(result[0]);
  })
};

exports.getUserVehicles = (req, res, next) => {
  db.vehicles.get_user_vehicles([parseInt(req.params.userId)], (err, result) => {
    if (err) console.error(err);
    res.status(200).json(result);
  })
};

exports.getQueryVehicles = (req, res, next) => {
  if (req.query.email) {
    console.log(req.query.email)
    db.vehicles.get_email_vehicles([req.query.email], (err, result) => {
      if (err) console.error(err);
      res.status(200).json(result);
    })
  } else if (req.query.userFirstStart) {
    db.vehicles.get_userfirststart_vehicles([req.query.userFirstStart + '%'], (err, result) => {
      if (err) console.error(err);
      res.status(200).json(result);
    })
  } else {
    res.status(404).send(err)
  }
};

exports.getNewerVehiclesByYear = (req, res, next) => {
  db.vehicles.get_newer_vehicles([], (err, result) => {
    if (err) console.error(err);
    res.status(200).json(result);
  })
};

exports.changeOwner = (req, res, next) => {
  db.vehicles.change_owner([
      parseInt(req.params.userId),
      parseInt(req.params.vehicleId)
    ], (err, result) => {
    if (err) console.error(err);
    res.status(200).json(result);
  })
};

exports.deleteOwnership = (req, res, next) => {
  db.vehicles.delete_ownership([
      parseInt(req.params.vehicleId)
    ], (err, result) => {
    if (err) console.error(err);
    res.status(200).json(result);
  })
};

exports.deleteVehicle = (req, res, next) => {
  db.vehicles.delete_vehicle([
      parseInt(req.params.vehicleId)
    ], (err, result) => {
    if (err) console.error(err);
    res.status(200).json(result);
  })
}



