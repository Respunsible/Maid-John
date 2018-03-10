const Discord = require('discord.js');
const client = new Discord.Client();

var names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone']
var greetings = ['hi', 'hello', 'hey', 'yo', 'greetings']

client.on('message', message => {
    message.content.toLowerCase()
    if (greetings.includes(message.content) || greetings.includes(message.content) && names.includes(message.content)) {
        message.channel.send('Hello ' + message.author.username + '.');
    }
});

client.login(process.env.token);
