use("sample_mflix");

// Ex6 Accessing Elements in Arrays

// all movies released 1950-1970 and being shown in countries located in the USA
// db.movies.find({countries: {$in: ["USA"]}, year: {$gte: 1950, $lte: 1970}})

// number of movies with genre "Drama" and "History" that released after year 1970
// db.movies.find({ genres: { $all: ["Drama", "History"] }, released: { $gt: ISODate("1970-01-01T00:00:00Z") } }).count();

// In how many films is Roy L. McCardell credited as an actor?
// db.movies.find({ cast: "Roy L. McCardell" }).count();

// How many movies did Hal Roach directed?
// db.movies.find({ directors: "Hal Roach" }).count();

// What is the movie with the earliest release year directed by Hal Roach?
// db.movies.find({ directors: { $in: ["Hal Roach"] } });

// How many awards did Hal Roach’s movies win?
db.movies.find(
  {
    directors: { $in: ["Hal Roach"] },
  },
  {
    title: 1,
    "awards.wins": 1,
    _id: 0,
  },
);

