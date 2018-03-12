var maid_johns_names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids', 'john maid', 'john best girl'];

//Dictionary
var are = ['are', 'r'].join("|");
var hi = ['hi', 'hello', 'hey', 'hai'].join("|");
var version = ['version', 'ver', 'ver.'].join("|");
var what = ['what', 'wat', 'wut'].join("|");
var you = ['you', 'u'].join("|");

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  //Converts message content to lowercase.
  message.content = message.content.toLowerCase();
  //If message content includes 'what version are you' and Maid John's name
  if (RegExp('(' + what + ')\\s+(' + version + ')\\s+(' + are + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name))) {
    message.channel.send('I\'m Maid John 0.0.1');
  }
});

client.login(process.env.token);
