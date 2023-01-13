const axios = require('axios')
const cheerio = require('cheerio')
const url = 'http://www.cgv.co.kr/movies/?lt=1&ft=0'
let rank = []
let moviename = []
axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  $('.rank').each(function () {
    rank.push($(this).text())
  })
  $('.title').each(function () {
    moviename.push($(this).text())
  })
  console.log('실행')
  // module.exports = (rank, moviename)

  // for (i = 0; i < 5; i++) {
  //   console.log(`${rank[i]}:${moviename[i]}`)
  // } // 크롤링
})
