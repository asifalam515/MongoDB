## Update Object
db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000066") }

    , {
        $set: {
        "address.city":"Dhaka"
        }
    })
    
 ### update array of object:will go to the docs then the specific thing to update
 db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000066"), "education.major": "History" }, {
    $set: {
        "education.$.major": "CSE"
    }
})

Incremenet a field value
db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000066") },
{$inc: {age:1}}
)