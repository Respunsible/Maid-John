const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.toLowerCase() === 'hi' || message.content.toLowerCase() === 'hi maid john') {
        message.channel.send('Hello' + message.author.username);
    }
});

client.login(process.env.token);
