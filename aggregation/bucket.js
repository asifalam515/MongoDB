db.test.aggregate([
    //stage 1:
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "80+ age group of people",
            output: {
                count: { $sum: 1 }
            }

        }
    }

])