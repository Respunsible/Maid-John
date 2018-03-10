const Discord = require('discord.js');
const client = new Discord.Client();

var message1 = nil

const greetings = ['hi', 'hello', 'hey', 'yo', 'greetings'];
const names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone'];

const isIncludes = (message, arr) => {
  for (let i in arr) {
    if (message.includes(arr[i])) {
      return true;
    }
  }
  return false;
}

client.on('message', message => {
  message1 = message.content
  if (isIncludes(message1[0], greetings) && isIncludes(message1[0], names)) {
    message.channel.send('Hello ' + message.author.username + '.');
  }
});

client.login(process.env.token);
