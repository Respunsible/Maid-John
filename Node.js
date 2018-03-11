const Discord = require('discord.js');
const client = new Discord.Client();

var greetings = ['hi', 'hello', 'hey', 'yo', 'greetings'];
var names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids'];
var whats = ['what', 'wat', 'wut'];
var versions = ['version', 'ver', 'ver.'];

const includes = (message, arr) => {
  for (let i in arr) {
    if (message.includes(arr[i])) {
      return true;
    }
  }
  return false;
}

//function version2() {
  //version.some(element => message.content.includes(element))
//}

client.on('message', message => {
  //what
  const includeswhat = whats.some(what => message.content.includes(what))
  
  if (includeswhat) {
    message.channel.send('I\'m version 0.0.3');
  }
  if (includes([message.content][0], greetings) && includes([message.content][0], names)) {
    message.channel.send('Hello ' + message.author.username + '.');
  }
});

client.login(process.env.token);
