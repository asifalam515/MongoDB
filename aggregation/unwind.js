db.test.aggregate([
    
    //stage 1
    {
      $unwind: "$friends"  
    },
    //stage 2
    {
        $group: { _id: "$friends",count:{$sum: 1}}
    }
    
    
    ])