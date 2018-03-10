const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.toLowerCase() === 'hi') {
    	message.reply('hello');
  	}
});

client.login(process.env.token);
