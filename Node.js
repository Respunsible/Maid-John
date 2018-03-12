var maid_johns_his = ['Hi', 'Hello']
var maid_johns_names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids', 'john maid', 'john best girl'];
var maid_johns_version = '0.0.2';

var ares = ['are', 'r'];
var his = ['hi', 'hello', 'hey', 'hai'];
var versions = ['version', 'ver', 'ver.'];
var whats = ['what', 'wat', 'wut'];
var yous = ['you', 'u'];
var yours = ['your', 'ur'];

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  //Converts message content to lowercase.
  message.content = message.content.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ' ').toLowerCase();
  
  //Maid John's version
  if (RegExp('(' + whats.join("|") + ')\\s+(' + versions.join("|") + ')\\s+(' + ares.join("|") + ')\\s+(' + yous.join("|") + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name)) || RegExp('(' + whats.join("|") + ')\\s+(' + 'is' + ')\\s+(' + yours.join("|") + ')\\s+(' + versions.join("|") + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name))) {
    message.channel.send(maid_johns_version);
  } else if (message.isMentioned(client.user) && RegExp('(' + whats.join("|") + ')\\s+(' + versions.join("|") + ')\\s+(' + ares.join("|") + ')\\s+(' + yous.join("|") + ')').test(message.content) || message.isMentioned(client.user) && RegExp('(' + whats.join("|") + ')\\s+(' + 'is' + ')\\s+(' + yours.join("|") + ')\\s+(' + versions.join("|") + ')').test(message.content)) {
    message.reply(maid_johns_version);
  }
  
  if (RegExp('(' + his.join("|") + ')\\s+(' + maid_johns_names.join("|") + ')').test(message.content)) {
    message.channel.send(maid_johns_his[Math.floor(Math.random() * maid_johns_his.length)]);
  } else if (message.isMentioned(client.user) && second_word.includes(message.content.split(' ')[1])) {
     message.reply(maid_johns_his[Math.floor(Math.random() * maid_johns_his.length)]);
  }
});

client.login(process.env.token);
