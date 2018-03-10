const Discord = require('discord.js');
const client = new Discord.Client();

const greetings = ['hi', 'hello', 'hey', 'yo', 'greetings']
const names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone']

const includes = (message, arr) => {
	for (let i in arr) {
		if (message.includes(arr[i])) {
			return true
		}
	}
	return false;
}

client.on('ready', () => {
    message.channel.send('Level up!');
});

client.on('message', message => {
	if (includes(message.content[0], greetings) && includes(message.content[0], names)) {
		message.channel.send('Hello ' + message.author.username + '.');
	}
});

client.login(process.env.token);
