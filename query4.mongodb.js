use("sample_mflix");

// Ex 3 theaters

// count theaters AL state
db.theaters.find({ "location.address.state": "AL" }).count();
