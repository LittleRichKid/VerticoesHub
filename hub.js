const Discord = require('discord.js');
const Bot = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN;
const Prefix = ';'

Bot.on('ready', () => {
    console.log('Bot is activated.');
});

Bot.on('message', message => {
    const auth = message.author;
    const user = auth.username;
    const cont = message.content;
    const msg = cont.toLowerCase();
    const chan = message.channel;
    
    if (msg === Prefix + 'shift') {
        embed = new Discord.RichEmbed()

        .setTitle('Shift')
        .setDescription(`A shift is currently being held by ${user}! Come on down for a nice relaxing drink, or for a chance to get promoted!`)
        .setColor('#007FFF')
        .setAuthor('Maui')

        chan.send(embed);
        message.delete();
    };

    if (msg === Prefix + 'bulk') {
        chan.bulkDelete(11);
        auth.send('Bulk deleted 10 messages for you.');
    };

    if (msg === Prefix + 'interview') {
        embed = new Discord.RichEmbed()

        .setTitle('Interview')
        .setDescription('A Interview has started! Head on down to the center for a chance to join our wonderful team! Remember to use grammar!')
        .setAuthor('Maui')
        .setColor('#007FFF')
        
        chan.send(embed);
        message.delete();
    };

});

Bot.login(TOKEN);
