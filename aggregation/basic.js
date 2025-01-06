db.test.aggregate([
    //stage 1:
    {$match: {gender:"Male",age:{$lt:30}}},
    // stage2
    {$project:{name:1,age:1}}
    ])
    
    // another query
    db.test.aggregate([
        //stage 1:
        { $match: { gender: "Male", age: { $lt: 30 } } },
        //stage 2:
        {$addFields: {course:"How to handle Women"}},
        //stage 3:
        {$project:{course:1}}
        
    ])

    // create another pipline 
    db.test.aggregate([
        //stage 1:
        { $match: { gender: "Male", age: { $lt: 30 } } },
        //stage 2:
        {$addFields: {course:"How to handle Women",edTech:"asif's online course"}},
        // stage 3:
        {$project: {course:1,edTech:1}},
        // stage 4:
        {$out: "course_student"}
        ])
    
    