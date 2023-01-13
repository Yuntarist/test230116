require('dotenv').config() // env와 값이 따라오는 필수 코드
const TelegramBot = require('node-telegram-bot-api')

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.botid2
// env파일 안에 있는 API값 가져옴

const bot = new TelegramBot(token, { polling: true })

// 에코기능쓰는 코드
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = match[4]
  bot.sendMessage(chatId, resp)
})

// 메세지 쓸때마다 나오는 채팅
// bot.on('message', (message) => {
//   const chatId = message.chat.id
//   bot.sendMessage(chatId, 'ㅇㅅㅇ')
//   console.log(msg)
// })
// 테스트중
bot.onText(/영화순위/, (msg, match) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, gg)
})
bot.onText(/배고파요/, (msg, match) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, '밥드세요')
})
bot.onText(/잠와요/, (msg, match) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, '자세요')
})
bot.onText(/ㅌㅌㅌㅌ/, (msg, match) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, 'ㅌㅌㅌ')
})
