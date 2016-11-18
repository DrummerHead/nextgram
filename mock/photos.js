import getRandomInt from '../helpers/get-random-int'

export default () => new Array(15)
  .fill(0)
  .map((v, k) => ({
    id: k + 1,
    url: `https://unsplash.it/${getRandomInt(300, 600)}/${getRandomInt(300, 600)}/`
  }))
