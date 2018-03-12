const Discord = require('discord.js');
const client = new Discord.Client();

var ares = ['are', 'r'];
var greetings = ['hi', 'hello', 'hey', 'yo', 'greetings'];
var names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids'];
var versions = ['version', 'ver', 'ver.'];
var whats = ['what', 'wat', 'wut'];
var yous = ['you', 'u'];

client.on('message', message => {
  //const message_includes_name = names.some(name => message.content.includes(name))
  //const message_includes_version = versions.some(version => message.content.includes(version))
  //const message_includes_what = whats.some(what => message.content.includes(what))
  
  if(whats.includes(message.content.split(' ')[0]) && versions.includes(message.content.split(' ')[1]) && ares.includes(message.content.split(' ')[2]) && yous.includes(message.content.split(' ')[3]) && names.some(name => message.content.includes(name))) {
    message.channel.send('I\'m version 0.0.1');
  }
});

client.login(process.env.token);
