const test = require('./CRUD_1Ori.js')
const main = async () => {
  const _data = {
    name: '네이버',
    explain: 'https://www.naver.com'
  }
  const new_test = new test(_data)
  const t = await new_test.save()
  console.log(t)
}
main()
