var maid_johns_names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids', 'john maid', 'john best girl'];
var maid_johns_version = '0.0.1'

//Dictionary
var are = ['are', 'r'].join("|");
var hi = ['hi', 'hello', 'hey', 'hai'].join("|");
var version = ['version', 'ver', 'ver.'].join("|");
var what = ['what', 'wat', 'wut'].join("|");
var you = ['you', 'u'].join("|");
var your = ['your', 'ur'].join("|");

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  //Converts message content to lowercase.
  message.content = message.content.toLowerCase();
  
  if (RegExp('(' + what + ')\\s+(' + version + ')\\s+(' + are + ')\\s+(' + you + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name)) || RegExp('(' + what + ')\\s+(' + 'is' + ')\\s+(' + your + ')\\s+(' + version + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name))) {
    message.channel.send(maid_johns_version);
  }
});

client.login(process.env.token);
