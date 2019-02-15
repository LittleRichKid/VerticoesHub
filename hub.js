const Discord = require('discord.js');
const Bot = new Discord.Client();
const BOTTOKEN = process.env.BOT_TOKEN;
const prefix = '.';

Bot.on('ready', () => {
   console.log('Bot has been activated.') ;
});

Bot.on('message', (message) => {
    
    const msg = message.content.toLowerCase();
    const auth = message.author;
    const user = auth.username;
    const con = message.content;
    const chan = message.channel;
    const mention = message.mentions.users.first();
    const mem = message.guild.member(mention);
   
    if (message.content.startsWith(';kick')) {
        if (mention) {
            if (mem) {
                mem.kick(`${auth} has kicked ${mention}.`).then(() => {
                message.delete()
                }).catch(err => {
                    message.reply('Kicking member didn\'t work.');
                    console.error(err);
                });
            };
        };
    };
    
    if (msg === 'hi') return message.reply(`Hello, ${user}! Are you looking for someone?`);

    if (msg === prefix + 'bulk') {
        message.channel.bulkDelete(10);
        auth.send('*Bulk deleted 50 messages in Verticoes.*');
    };

    if (msg === prefix + 'shift') {
        const embed = new Discord.RichEmbed()
        .setTitle('Shift')
        .setDescription(`A session is being hosted by ${user} at the cafe now! Please come join us for a possible promotion, or to just relax with a nice drink!`)
        .setAuthor('Verticoes Cafe')
        .setColor('#FFAA7F')

        message.channel.send(embed);
    };
});

Bot.login(BOTTOKEN);
