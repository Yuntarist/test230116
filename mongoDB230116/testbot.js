require('dotenv').config() // env와 값이 따라오는 필수 코드
const TelegramBot = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'test230116'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
const test = require('./folder1/test용.js')
const token = process.env.botid2
// env파일 안에 있는 API값 가져옴

const bot = new TelegramBot(token, { polling: true })
const chatId1 = 5737093922
// 메세지 쓸때마다 나오는 채팅
// bot.on('message', (message) => {
//   const chatId = message.chat.id
//   bot.sendMessage(chatId, 'ㅇㅅㅇ')
//   console.log(msg)
// })

mongoose.set(`strictQuery`, false)
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err))
const Schema = mongoose.Schema

const testSchema = new Schema({
  name: String,
  explain: String
})
// 아이유
const iu = async () => {
  const t = await test
    .findOne({
      $or: [
        {
          name: {
            $eq: '아이유'
          }
        }
      ]
    })
    .lean()
  console.log(t)
  bot.sendMessage(chatId1, `${t.explain}`)
}
// 네이버
const naver = async () => {
  const r = await test
    .findOne({
      $or: [
        {
          name: {
            $eq: '네이버'
          }
        }
      ]
    })
    .lean()
  console.log(r)
  bot.sendMessage(chatId1, `${r.explain}`)
}

// bot.onText(/아이유/, (msg, match) => {
//   const chatId = msg.chat.id
//   bot.sendMessage(chatId, exp)
// })
bot.on('message', (msg) => {
  const chatId = msg.chat.id
  console.log(chatId)
  if (msg.text == '아이유') {
    iu()
  }
  if (msg.text == '네이버') {
    naver()
  }
})
