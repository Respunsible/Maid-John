const Discord = require('discord.js');
const client = new Discord.Client();

const greetings = ['hi', 'hello', 'hey', 'yo', 'greetings'];
const names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone'];

const isIncludes = (msg, arr) => {
  for (let i in arr) {
    if (msg.includes(arr[i])) {
      return true
    }
  }
  return false;
}

client.on('message', message => {
  if (message.content === 'Test') {
    message.channel.send('Quiz');
  }
  var message1 = message.content
  if (isIncludes(message1[0], greetings) && isIncludes(message1[0], names)) {
    message.channel.send('Hello ' + message.author.username + '.');
  }
});

client.login(process.env.token);
