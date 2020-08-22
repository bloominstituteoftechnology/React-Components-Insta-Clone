import React from 'react';
import kenz from './assets/kenz.png';

const dummyData = [
    {
        id: 1,
        username: "kenzcoffeeroasters",
        thumbnailUrl: kenz,
        imageUrl: 'https://i.pinimg.com/originals/19/6b/0c/196b0c16e3fd1fdd6ef110c51f254d59.jpg',
        likes: 900,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                id: 22,
                username: "philzcoffee",
                text: "We've got more than Kenz Coffee Roasters come to Philz!",
            },
            {
                id: 23,
                username: "biancasaurus",
                text: "Hate Kenz!",
            },
            {
                id: 24,
                username: "martinseludo",
                text: "Philz is the best!",
            },
        ],
    },
    {
        id: 2,
        username: "twitch",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "twitch",
                text: "Epic Street Fighter action here in Vegas!",
            },
            {
                id: 37,
                username: "michaelmarzetta",
                text: "Omg that match was crazy",
            },
            {
                id: 38,
                username: "the_leprechaun",
                text: "What a setup",
            },
            {
                id: 39,
                username: "dennis_futbol",
                text: "It that injustice",
            },
        ],
    },
    {
        id: 3,
        username: "Bitcoin",
        thumbnailUrl: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
        imageUrl: 'https://thumbor.forbes.com/thumbor/960x0/https://specials-images.forbesimg.com/dam/imageserve/908633080/960x0.jpg?fit=scale',
        likes: 407,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "bitcoin",
                text: "Epic mooning!",
            },
            {
                id: 37,
                username: "crypto",
                text: "BTC to the Mooon",
            },
            {
                id: 38,
                username: "ethereum",
                text: "What a coin",
            },
            {
                id: 39,
                username: "dennis_futbol",
                text: "It that injustice",
            },
        ],
    },
];

export default dummyData;
