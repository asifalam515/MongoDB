db.test.aggregate([
    //stage 1:
    {$group: { _id: "$gender"}}
    ])

    // avarage of salary:
    db.test.aggregate([
    
        //stage 1:
        {$group: { _id: null, totalDoc:{$sum:1},avgSalary:{$avg: "$salary"}}
           
        }
        ])