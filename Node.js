const Discord = require('discord.js');
const client = new Discord.Client();

var greetings = ['hi', 'hello', 'hey', 'yo', 'greetings'];
var names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids'];
var versions = ['version', 'ver', 'ver.'];
var whats = ['what', 'wat', 'wut'];

client.on('message', message => {
  
  const message_includes_name = names.some(name => message.content.includes(name))
  const message_includes_version = versions.some(version => message.content.includes(version))
  const message_includes_what = whats.some(what => message.content.includes(what))
  
  if (message.content.includes('what' + 'version')) {
    message.channel.send('I\'m version 0.0.4');
  }
  if (includes([message.content][0], greetings) && includes([message.content][0], names)) {
    message.channel.send('Hello ' + message.author.username + '.');
  }
});

client.login(process.env.token);
