db.test.deleteOne({ _id: ObjectId("6406ad63fc13ae5a40000066")}, 

)
//create a collection
db.createCollection("MyCollection")
//Delete a collection
db.students.drop( { writeConcern: { w: 1 } } )