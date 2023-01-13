const test = require('./CRUD_Ori.js')
const main = async () => {
  const _data = {
    name: '아이유',
    explain: '이쁘다'
  }
  const new_test = new test(_data)
  const t = await new_test.save()
  console.log(t)
}
main()
