// TODO: this router is not mocked in MSW
const express = require('express')

const router = express.Router()

const pics = [
  ['karthik-sreenivas-rsx-joaKYrk-unsplash.jpg', 'Photo by Karthik Sreenivas on Unsplash'],
  ['kaung-myat-min-iBLWICTNt0Y-unsplash.jpg', 'Photo by Kaung Myat Min on Unsplash'],
  ['marcel-l-PQewPJqNKwQ-unsplash.jpg', 'Photo by Marcel L. on Unsplash'],
  ['mostafa-meraji-DH3TclSIBuI-unsplash.jpg', 'Photo by Mostafa Meraji on Unsplash'],
  ['mostafa-meraji-HJgEB78b2Z8-unsplash.jpg', 'Photo by Mostafa Meraji on Unsplash'],
  ['rene-porter-hteGzeFuB7w-unsplash.jpg', 'Photo by René Porter on Unsplash'],
  ['sam-moghadam-khamseh-_kn16nC2vcw-unsplash.jpg', 'Photo by Sam Moghadam Khamseh on Unsplash'],
  ['tengyart-kSvpTrfhaiU-unsplash.jpg', 'Photo by Tengyart on Unsplash'],
  ['vadim-kaipov-f6jkAE1ZWuY-unsplash.jpg', 'Photo by vadim kaipov on Unsplash'],
  ['will-4lbniAdMzcc-unsplash.jpg', 'Photo by Will on Unsplash'],
]

const baseUrl = 'https://bloominstituteoftechnology.github.io/img'

router.get('/list', (req, res) => {
  let data = pics.map(pic => ({
    file: `${baseUrl}/${pic[0]}`,
    detail: pic[1],
  }))
  res.json(data)
})

router.get('/random', (req, res) => {
  const pic = pics[Math.floor(Math.random() * pics.length)]
  res.json({
    file: `${baseUrl}/${pic[0]}`,
    detail: pic[1],
  })
})

module.exports = router
