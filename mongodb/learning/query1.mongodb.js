use("sample_mflix");

// Ex1 comments

//  Find all
// db.comments.find();

//  Find one user id : ObjectId(“5a9427648b0beebeb69579f5”)
// db.comments.findOne({_id: ObjectId("5a9427648b0beebeb69579f5")});

// Find one email : "john_bishop@fakegmail.com"
db.comments.findOne({email: "john_bishop@fakegmail.com"});

// Find one name : "John Bishop"
// db.comments.findOne({name: "John Bishop"});