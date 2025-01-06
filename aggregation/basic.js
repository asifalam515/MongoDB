db.test.aggregate([
    //stage 1:
    {$match: {gender:"Male",age:{$lt:30}}}
    ])
    