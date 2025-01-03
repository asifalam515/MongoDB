db.test.find({$and: [
    
    {age:{$ne: 15}},
    {age: {$lte: 30 }},
    ]})


// another example using logic or
db.test.find({
    $or: [
        {interests:"Reading"},
        {interests:"Travelling"}
        ]
 },{age:1,name:1,interests:1}).sort({ sortField:1 })