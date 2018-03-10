const Discord = require('discord.js');
const client = new Discord.Client();

const names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone']
const greetings = ['hi', 'hello', 'hey', 'yo', 'greetings']

client.on('message', message => {
    if (greetings.include(message.content.toLowerCase())) {
        message.channel.send('Hello ' + message.author.username + '.');
    }
});

client.login(process.env.token);
