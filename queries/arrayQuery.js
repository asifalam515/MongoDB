// Array Query Operator::
{ <field>: { $all: [ <value1> , <value2> ... ] } }
db.test.find({interests:{$all:["Travelling","Reading"]}})

#another example
db.test.find({"skills.name":"JAVA"})

#Elem Match: will give all the matched item(doesn't matter order) 
{ <field>: { $elemMatch: { <query1>, <query2>, ... } } }
db.test.find({
    skills:{$elemMatch: {
        name:"JAVASCRIPT",
        level:"Expert",
        // isLearning:"false"
    }
    
} })
   .projection({})
   .sort({$natural:-1})
   .limit(0)

