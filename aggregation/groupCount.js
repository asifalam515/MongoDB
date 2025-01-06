db.test.aggregate([
    //stage 1:
    {$group: { _id: "$gender"}}
    ])