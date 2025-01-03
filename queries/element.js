db.test.find({
    age:{$exists: false}
})

db.test.find({
    age:{$type: "string"}
})
db.test.find({
    friends:{$size: 4}
},{friends:1})