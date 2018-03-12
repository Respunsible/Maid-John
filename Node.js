var maid_johns_his2 = ['Hi.', 'Hello.']
var maid_johns_names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids', 'john maid', 'john best girl'];
var maid_johns_version = '0.0.2';

var john = 'd to the e to the d'

var ares = ['are', 'r'];
var his = ['hi', 'hello', 'hey', 'hai', 'yo'];
var loves = ['love', 'luv']
var versions = ['version', 'ver', 'ver.'];
var whats = ['what', 'wat', 'wut'];
var yous = ['you', 'u'];
var yours = ['your', 'ur'];

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  
  var maid_johns_his2 = ['Hi', 'Hello', 'Hi' + ' ' + message.author.username + '.', 'Hello' + ' ' + message.author.username + '.']
  
  //Converts message content to lowercase.
  message.content = message.content.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ' ').toLowerCase();
  
  //Maid John's version
  if (RegExp('(' + whats.join("|") + ')\\s+(' + versions.join("|") + ')\\s+(' + ares.join("|") + ')\\s+(' + yous.join("|") + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name)) || RegExp('(' + whats.join("|") + ')\\s+(' + 'is' + ')\\s+(' + yours.join("|") + ')\\s+(' + versions.join("|") + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name))) {
    message.channel.send(maid_johns_version);
  } else if (message.isMentioned(client.user) && RegExp('(' + whats.join("|") + ')\\s+(' + versions.join("|") + ')\\s+(' + ares.join("|") + ')\\s+(' + yous.join("|") + ')').test(message.content) || message.isMentioned(client.user) && RegExp('(' + whats.join("|") + ')\\s+(' + 'is' + ')\\s+(' + yours.join("|") + ')\\s+(' + versions.join("|") + ')').test(message.content)) {
    message.reply(maid_johns_version);
  }
  
  if (RegExp('(' + his.join("|") + ')\\s+(' + maid_johns_names.join("|") + ')').test(message.content)) {
    message.channel.send(maid_johns_his2[Math.floor(Math.random() * maid_johns_his2.length)]);
  } else if (message.isMentioned(client.user) && his.includes(message.content.split(' ')[3])) {
     message.reply(maid_johns_his[Math.floor(Math.random() * maid_johns_his.length)]);
  }
  
  if (message.author.username === john && RegExp('(' + 'i' + ')\\s+(' + loves.join("|") + ')\\s+(' + you.join("|") + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name))) {
      message.channel.send('I love you too, but you\'re too much for me.');
  }
});

client.login(process.env.token);
