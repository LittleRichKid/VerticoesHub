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
    const mention = message.guild.member.first();
    const mem = message.member.guild(mention);
    
    if (!message.guild) return;

    if (message.content.startsWith(';kick')) {
        if (mention) {
            if (mem) {
                mem.kick(`${auth} has kicked ${mention}.`).then(() => {

                }).catch(err => {
                    message.reply('Kicking member didn\'t work.');
                    console.error(err);
                });
            };
        };
    };
    
    if (message.content.startsWith(';ban')) {
        if (mention) {
          if (mem) {
            mem.ban({
              reason: 'Banned due to violating the rules!',
            }).then(() => {
              message.reply(`Successfully banned ${user.tag}`);
            }).catch(err => {
              message.reply('I was unable to ban the member');
              console.error(err);
            });
          } else {
            message.reply('That user isn\'t in this guild!');
          }
        } else {
          message.reply('You didn\'t mention the user to ban!');
        }
      }
    
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
