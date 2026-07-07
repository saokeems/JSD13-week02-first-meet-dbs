use("sample_mflix");

// Ex4 REGEX /regular expression

// count movies mentioned american plot
// db.movies.find({ plot: { $regex: "American", $options: "i" } }).count();

// count movies end plot with word street
// db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count();

// Ex data from above
db.movies.find({ plot: { $regex: "street.$", $options: "i" } });