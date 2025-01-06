db.test.aggregate([
    // Stage 1: Bucketing
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "80+ age group of people",
            output: {
                count: { $sum: 1 },
                peopleDoc: { $push: "$$ROOT" }
            }
        }
    },
    // Stage 2: Sorting
    {
        $sort: { count: -1 }
    },
    // Stage 3: Project
    {
        $project: {
            count: 1
        }
    }
]);
