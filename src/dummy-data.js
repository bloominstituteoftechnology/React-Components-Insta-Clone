const dummyData = [
    {
        username: "brianaabreu",
        thumbnailUrl: 'https://images.unsplash.com/photo-1574473573325-d2d221ec010e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        imageUrl: 'https://avatars3.githubusercontent.com/u/58013867?s=460&v=4',
        likes: 240,
        timestamp: "march 2, 2020",
        comments: [
            {
                username: "brianaabreu",
                text: "Checkout my projects on github!"
            },
            {
                username: "brolz",
                text: "cool projects!"
            },
            {
                username: "coder23",
                text: "great codes!"
            }
        ]
    },
    {
        username: "willsmith",
        thumbnailUrl: 'data:image/jpeg;base64,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',
        imageUrl: 'https://image.tmdb.org/t/p/original//rm1TM7DbNaXeAWIgJJKRr9qrIi0.jpg',
        likes: 414307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                username: "willsmith",
                text: "Watch bad boys in 2020!"
            },
            {
                username: "brianaabreu",
                text: "Omg can't wait"
            },
            {
                username: "willsmithfan123",
                text: "Awesome!!"
            },
            {
                username: "martinlawrence",
                text: ":)"
            }
        ]
    }
];

export default dummyData;