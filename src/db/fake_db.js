const db = {
    users: [
        {
            id: 1,
            balance: "$3,946.45",
            picture: "http://placehold.it/32x32",
            age: 23,
            name: "Bird Ramsey",
            gender: "male",
            company: "NIMON",
            email: "birdramsey@nimon.com",
        },
        {
            id: 2,
            balance: "$2,499.49",
            picture: "http://placehold.it/32x32",
            age: 31,
            name: "Lillian Burgess",
            gender: "female",
            company: "LUXURIA",
            email: "lillianburgess@luxuria.com",
        },
        {
            id: 3,
            balance: "$2,820.18",
            picture: "http://placehold.it/32x32",
            age: 34,
            name: "Kristie Cole",
            gender: "female",
            company: "QUADEEBO",
            email: "kristiecole@quadeebo.com",
        },
        {
            id: 4,
            balance: "$3,277.32",
            picture: "http://placehold.it/32x32",
            age: 30,
            name: "Leonor Cross",
            gender: "female",
            company: "GRONK",
            email: "leonorcross@gronk.com",
        },
        {
            id: 5,
            balance: "$1,972.47",
            picture: "http://placehold.it/32x32",
            age: 28,
            name: "Marsh Mccall",
            gender: "male",
            company: "ULTRIMAX",
            email: "marshmccall@ultrimax.com",
        },
    ],
    posts: [
        {
            id: 1,
            topic: "example-topic-1",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus orci in elit pharetra, nec gravida arcu efficitur. Cras eleifend in risus nec imperdiet.",
            owner_id: 2,
        },
        {
            id: 2,
            topic: "example-topic-2",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus orci in elit pharetra, nec gravida arcu efficitur. Cras eleifend in risus nec imperdiet.",
            owner_id: 1,
        },
    ],
};

module.exports = db;
