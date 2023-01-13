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

  const result = rank.reduce((acc, cur, idx) => {
    acc[cur] = moviename[idx]
    return acc
  }, new Object())
  console.log(result)
  const json = JSON.stringify(result)
  console.log(json)
  const test = require('./CRUD_1Ori.js')
  const main = async () => {
    const _data = {
      name: '영화',
      explain: json
    }
    const new_test = new test(_data)
    const t = await new_test.save()
    console.log(t)
  }
  main()
})

// numbers.forEach((number) => console.log(number))
