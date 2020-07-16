// Required libraries
const { Composer } = require('micro-bot')
const bot = new Composer
// Bot *start* command 
bot.start((ctx) => {
    ctx.reply('Welcome to Fun Bot. Type /help for bot commands.')
})
// Bot *help* Command
bot.command(["help"], ctx => {
    let message = `
Helf Reference:
/cat <text> - Get a cat image with your text
`;
    ctx.reply(message)
})
// Bot *cat* command
bot.command("cat", async (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ")
    inputArray.shift()
    input = inputArray.join(" ")
    ctx.replyWithPhoto(`https://cataas.com/cat/says/${input}`)
})
// Bot *launch* command
module.exports = bot