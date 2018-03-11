const Discord = require('discord.js');
const client = new Discord.Client();

const greetings = ['hi', 'hello', 'hey', 'yo', 'greetings'];
const names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids'];
const what = ['what', 'wat', 'wut'];
const version = ['version', 'ver', 'ver.'];

const includes = (message, arr) => {
  for (let i in arr) {
    if (message.includes(arr[i])) {
      return true;
    }
  }
  return false;
}

client.on('message', message => {
  if (what.some(element => message.content.includes(element)) + version.some(element => message.content.includes(element))) {
    message.channel.send('I\'m version 0.0.4');
  }
  if (includes([message.content][0], greetings) && includes([message.content][0], names)) {
    message.channel.send('Hello ' + message.author.username + '.');
  }
});

client.login(process.env.token);
