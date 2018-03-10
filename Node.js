const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.toLowerCase() === 'hi') {
        message.channel.send('hello');
    }
});

client.login(process.env.token);
