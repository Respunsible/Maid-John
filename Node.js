var maid_johns_hi = ['hi', 'hello']
var maid_johns_names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids', 'john maid', 'john best girl'];
var maid_johns_version = '0.0.1';

var are = ['are', 'r'];
var hi = ['hi', 'hello', 'hey', 'hai'];
var version = ['version', 'ver', 'ver.'];
var what = ['what', 'wat', 'wut'];
var you = ['you', 'u'];
var your = ['your', 'ur'];

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  //Converts message content to lowercase.
  message.content = message.content.toLowerCase();
  
  //Maid John's version
  if (RegExp('(' + what.join("|") + ')\\s+(' + version.join("|") + ')\\s+(' + are.join("|") + ')\\s+(' + you.join("|") + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name)) || RegExp('(' + what.join("|") + ')\\s+(' + 'is' + ')\\s+(' + your.join("|") + ')\\s+(' + version.join("|") + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name))) {
    message.channel.send(maid_johns_version);
  } else if (message.isMentioned(client.user) && RegExp('(' + what.join("|") + ')\\s+(' + version.join("|") + ')\\s+(' + are.join("|") + ')\\s+(' + you.join("|") + ')').test(message.content) || message.isMentioned(client.user) && RegExp('(' + what.join("|") + ')\\s+(' + 'is' + ')\\s+(' + your.join("|") + ')\\s+(' + version.join("|") + ')').test(message.content)) {
    message.reply(maid_johns_version);
  }
  
  if (RegExp('(' + hi.join("|") + ')\\s+(' + maid_johns_names.join("|")').test(message.content)) {
    message.channel.send('hi');
  }
});

client.login(process.env.token);
