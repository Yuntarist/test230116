const axios = require('axios')
const cheerio = require('cheerio')
const url = 'http://www.cgv.co.kr/movies/?lt=1&ft=0'

axios.get(url).then((res) => {
  let rank = []
  let moviename = []
  let $ = cheerio.load(res.data)
  $('.rank').each(function () {
    rank.push($(this).text())
  })
  $('.title').each(function () {
    moviename.push($(this).text())
  })
  console.log(rank, moviename)
  const rank2 = rank.toString()
  const moviename2 = moviename.toString()
  console.log(rank2)
  const test = require('./CRUD_1Ori.js')
  const main = async () => {
    const _data = {
      name: rank2,
      explain: moviename2
    }
    const new_test = new test(_data)
    const t = await new_test.save()
    console.log(t)
  }
  main()
})

// numbers.forEach((number) => console.log(number))
