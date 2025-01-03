db.test.find({$and: [
    
    {age:{$ne: 15}},
    {age: {$lte: 30 }},
    ]})