const axios = require('axios')
const cheerio = require('cheerio')
const url =
  'https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202#childTab_tmp'

axios.get(url).then((res) => {
  let menu = [],
    day = [],
    date = []
  let $ = cheerio.load(res.data)
  $('.day').each(function () {
    day.push($(this).text())
  })
  $('.date').each(function () {
    date.push($(this).text())
  })
  $('.menu-tit01~p').each(function () {
    menu.push($(this).text())
  })
  console.log(menu, day, date)
  const day2 = day.toString() // 배열을 문자열로
  const result = date.reduce((acc, cur, idx) => {
    acc[cur] = menu[idx]
    return acc
  }, new Object())
  console.log(day2)
  console.log(result)
  const json = JSON.stringify(result)
  console.log(json)
  const test = require('./CRUD_1Ori.js')
  const main = async () => {
    const _data = {
      name: day2,
      explain: json
    }
    const new_test = new test(_data)
    const t = await new_test.save()
    console.log(t)
  }
  main()
})
