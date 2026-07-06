use("sample_mflix");

// Ex 3 theaters

// count theaters AL state
// db.theaters.find({ "location.address.state": "AL" }).count();

// count theaters La Quinta city
db.theaters.find({ "location.address.city": "La Quinta" }).count();

// Ex one from La Quinta city
// db.theaters.findOne({ "location.address.city": "La Quinta" });
