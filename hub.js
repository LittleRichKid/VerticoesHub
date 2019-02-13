const Discord = require('discord.js');
const Bot = new Discord.Client();
const BOTTOKEN = process.env.BOT_TOKEN;
const prefix = '.';

Bot.on('ready', () => {
   console.log('Bot is activated.') ;
});

Bot.on('message', (message) => {
    
    const msg = message.content.toLowerCase();
    const auth = message.author;
    const user = auth.username;
    const con = message.content;
    const chan = message.channel;
    
    if (msg === 'hi') return message.reply(`Hello, ${user}! Are you looking for someone?`);

    if (msg === prefix + 'bulk') {
        message.channel.bulkDelete(50000);
        auth.send('*Bulk deleted 100 messages in Verticoes.*');
    };
});

Bot.login(BOTTOKEN);
