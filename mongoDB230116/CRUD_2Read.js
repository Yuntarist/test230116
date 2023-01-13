const test = require('./CRUD_1Ori.js')

const main = async () => {
  const t = await test
    .findOne({
      $or: [
        {
          name: {
            $eq: '아이유' // DB안에서 자료를 찾을때 좋다
          }
        }
      ]
    })
    .lean()
  console.log(t)
}
main()
module.exports = main()
