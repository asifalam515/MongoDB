db.test.find({age:{$eq:12}},{age:1})
db.test.find({age:{$gte:40}},{age:1}).sort({ age:1 })