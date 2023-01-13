const axios = require('axios') // request 용도
const cheerio = require('cheerio') // 선택자용도

const url =
  'https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202#childTab_tmp'

axios.get(url).then((res) => {
  let menu = [],
    day = [],
    date = []

  let $ = cheerio.load(res.data)
  $('.day').each(function () {
    // html에서 쓰는 css선택자 쓰듯 사용 가능
    day.push($(this).text())
  })
  $('.date').each(function () {
    date.push($(this).text())
  })
  $('.menu-tit01~p').each(function () {
    menu.push($(this).text())
  })
  for (i in menu) {
    // 메뉴가 있는날만
    console.log(`${date[i]}(${day[i]})\n${menu[i]}`)
  }
})

// 객체만들기
// day : [월,화,수,목,금,토,일]
// menu :
