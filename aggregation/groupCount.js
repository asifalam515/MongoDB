db.test.aggregate([
    //stage 1:
    {$group: { _id: "$gender"}}
    ])

    // MOre about salary:
    db.test.aggregate([

        //stage 1:
        {
            $group: {
                _id: null, totalDoc: { $sum: 1 }, avgSalary: { $avg: "$salary" },
                minSalary: { $min: "$salary" },
                totalSalary: { $sum: "$salary" },
                maxSalary: { $max: "$salary" }
            }
    
        },
        //stage 2:
        { $project: { totalSalary:"$totalSalary",
        mamximumSalary:"$maxSalary" , 
        minSalary:"$minSalary",
        range:{$subtract: ["$maxSalary","$minSalary"]}
            
            
        } }
    ])