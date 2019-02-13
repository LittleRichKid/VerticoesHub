const Discord = require('discord.js');
const Bot = new Discord.Client();
const BOT_TOKEN = "";
const prefix = '.';

Bot.on('message', (message) => {
    
    const msg = message.content.toLowerCase();
    const auth = message.author;
    const user = auth.username;
    const con = message.content;
    const chan = message.channel;
    
    if (msg === 'hi') return message.reply(`Hello, ${user}! Are you looking for someone?`);

    if (msg === prefix + 'bulk') {
        message.channel.bulkDelete(50)
        auth.send('*Bulk deleted 50 messages in Verticoes.*')
    };
});