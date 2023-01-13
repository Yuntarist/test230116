const axios = require('axios')
const cheerio = require('cheerio')
const url = 'http://www.cgv.co.kr/movies/?lt=1&ft=0'

axios.get(url).then((res) => {
  let rank = [],
    moviename = []

  let $ = cheerio.load(res.data)
  $('.rank').each(function () {
    rank.push($(this).text())
  })
  $('.title').each(function () {
    moviename.push($(this).text())
  })

  for (i = 0; i < 5; i++) {
    console.log(`${rank[i]}:${moviename[i]}`)
  } // 크롤링
})

const { Photo } = require('./folder1/test용.js')
const main = async () => {
  const _data = {
    albumId: 230112,
    id: 230112,
    title: 'ㅇㅅㅇ',
    url: 'google.com',
    thumbnailUrl: 'https://naver.com'
  }
  const new_photo = new Photo(_data)
  const t = await new_photo.save()
  console.log(t)
}
main()
