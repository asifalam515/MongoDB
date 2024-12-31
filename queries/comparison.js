db.test.find({age:{$eq:12}},{age:1})
db.test.find({age:{$gte:40}},{age:1}).sort({ age:1 })
//age between 18 to 30. add two condition (implecit and)
db.test.find({age:{$gte: 18,$lte: 30}},{age:1}).sort({age:1})
db.test.find({age:{$gte: 18,$lte: 30},gender:{$eq: "Female"}},{age:1,gender:1}).sort({age:1})
// age should only be 18/12/19/21/20/26
db.test.find({gender:"Female"
    ,age:{$in: [18,12,19,21,20,26]}},{age:1,gender:1})

//query on age and cooking lover
db.test.find({gender:"Female",
age:{$gte:18,$lte:30 },
interests:{$in: ["Cooking"]}
    
},{age:1,interests:1})
//query on age and cooking lover or Reading lover
db.test.find({gender:"Female",
age:{$gte:18,$lte:30 },
interests:{$in: ["Cooking","Reading"]}
    
},{age:1,interests:1})