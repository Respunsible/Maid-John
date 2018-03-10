const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'hi') {
    	message.createMessage('hello');
  	}
});

client.login(process.env.token);
