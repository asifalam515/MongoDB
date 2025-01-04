// add CODING  to the interest array
db.test.updateOne({
    _id:  ObjectId("6406ad63fc13ae5a40000066")
}, {
    $addToSet
        : {interests:"CODING"}
})

// if i want to add multiple things i can use each
db.test.updateOne({
    _id:  ObjectId("6406ad63fc13ae5a40000066")
}, {
    $addToSet
        : {interests:{$each: ["PROGRAMMING","VIDEO CREATING"]}}
})


$push:you can duplicate same array element by using push
db.test.updateOne({
    _id:  ObjectId("6406ad63fc13ae5a40000066")
}, {
    $push
        : {interests:{$each: ["PROGRAMMING","VIDEO CREATING"]}}
})
db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000066") }
, { $unset: { birthday: "" } }
, { $set: {} })