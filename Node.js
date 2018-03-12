var maid_johns_names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids', 'john maid', 'john best girl'];

//Dictionary
var are = ['are', 'r'];
var hi = ['hi', 'hello', 'hey', 'hai'];
var version = ['version', 'ver', 'ver.'];
var what = ['what', 'wat', 'wut'];
var you = ['you', 'u'];

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  //Converts message content to lowercase.
  message.content = message.content.toLowerCase();
  //If message content = 'What version are you?'
  if (RegExp('(' + what + ')\\s+(' + version + ')\\s+(' + are + ')\\s+(' + you + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name))) {
    message.channel.send('I\'m version 0.0.2');
  }
});

client.login(process.env.token);
