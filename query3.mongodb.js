use("sample_mflix");

// Ex2 movies

// Ex of type : "movie" , rated : "TV-G"
// db.movies.findOne({ type: "movie", rated: "TV-G" });

// count type : "movie" , rated : "TV-G"
db.movies.find({ type: "movie", rated: "TV-G" }).count();
