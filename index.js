const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const token = "5327073967:AAG1QXUh_NCQadne7goyPR77vJmvpcQK-ks";
const bot = new TelegramBot(token, { polling: true });
const app = express();

// bot.onText("new", (msg, match) => {
//   const chatId = msg.chat.id;
//   const resp = match[1];
//   console.log(msg);
//   console.log(match);
// });
bot.on("message", (msg) => console.log(msg));
app.use(express.static("client/build"));
app.use(express.json());
app.post("/", (req, res) => {
  const { email, phone } = req.body;
  let send = "Новая заявка";
  send += "\nemail: " + email;
  send += "\nphone " + phone;
  bot.sendMessage(670110071, send);
});
app.all("*", (req, res) => {
  return res.sendFile("index.html");
});
app.listen(3000);
