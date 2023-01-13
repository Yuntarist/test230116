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

const main = async () => {
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
}
main()

bot.onText(/아이유/, (msg, match) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, '이쁘냐')
})
