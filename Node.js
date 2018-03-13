var maid_johns_byes = ['Bye.', 'Take care.'];
var maid_johns_his = ['Hi.', 'Hello.'];
var maid_johns_names = ['maid john', 'best girl', 'best girl john', 'girl john', 'guys', 'everyone', 'girls', 'maids', 'john maid', 'john best girl'];
var maid_johns_version = '0.0.3';

var ares = ['are', 'r'];
var byes = ['bye', 'goodbye', 'see ya', 'cya', 'see you'];
var his = ['hi', 'hello', 'hey', 'hai', 'yo'];
var kys = ['kys', 'kill yourself'];
var loves = ['love', 'luv'];
var versions = ['version', 'ver', 'ver.'];
var whats = ['what', 'wat', 'wut'];
var yous = ['you', 'u'];
var yours = ['your', 'ur'];

const rock_paper_scissors = [':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':v:', ':fist:', ':hand_splayed:', ':scissors:'];

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  
  var maid_johns_byes2 = ['Bye.', 'Take care.', 'Bye' + ' ' + message.author.username + '.', 'Take care' + ' ' + message.author.username + '.'];
  var maid_johns_his2 = ['Hi', 'Hello', 'Hi' + ' ' + message.author.username + '.', 'Hello' + ' ' + message.author.username + '.'];
  
  //Converts to lowercase
  message.content = message.content.toLowerCase();
  
  //maid_johns_version
  if (RegExp('(' + whats.join("|") + ')\\s+(' + versions.join("|") + ')\\s+(' + ares.join("|") + ')\\s+(' + yous.join("|") + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name)) || RegExp('(' + whats.join("|") + ')\\s+(' + 'is' + ')\\s+(' + yours.join("|") + ')\\s+(' + versions.join("|") + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name))) {
    message.channel.send(maid_johns_version);
  } else if (message.isMentioned(client.user) && RegExp('(' + whats.join("|") + ')\\s+(' + versions.join("|") + ')\\s+(' + ares.join("|") + ')\\s+(' + yous.join("|") + ')').test(message.content) || message.isMentioned(client.user) && RegExp('(' + whats.join("|") + ')\\s+(' + 'is' + ')\\s+(' + yours.join("|") + ')\\s+(' + versions.join("|") + ')').test(message.content)) {
    message.reply(maid_johns_version);
  }
  
  //'Hi'
  if (RegExp('(' + his.join("|") + ')\\s+(' + maid_johns_names.join("|") + ')').test(message.content)) {
    message.channel.send(maid_johns_his2[Math.floor(Math.random() * maid_johns_his2.length)]);
  } else if (message.isMentioned(client.user) && RegExp('(' + his.join("|") + ')').test(message.content)) {
     message.reply(maid_johns_his[Math.floor(Math.random() * maid_johns_his.length)]);
  }
  
  //'Bye'
  if (RegExp('(' + byes.join("|") + ')\\s+(' + maid_johns_names.join("|") + ')').test(message.content)) {
    message.channel.send(maid_johns_byes2[Math.floor(Math.random() * maid_johns_byes2.length)]);
  } else if (message.isMentioned(client.user) && RegExp('(' + byes.join("|") + ')').test(message.content)) {
     message.reply(maid_johns_byes[Math.floor(Math.random() * maid_johns_byes.length)]);
  }
  
   //'I will not'
  if (RegExp('(' + kys.join("|") + ')\\s+(' + maid_johns_names.join("|") + ')').test(message.content) || RegExp('(' + maid_johns_names.join("|") + ')\\s+(' + kys.join("|") + ')').test(message.content)) {
    message.channel.send('I will not.');
  }
  
  //Rock-paper-scissors
  if (message.content === 'rock' || message.content === 'paper' || message.content === 'scissors' || message.content === ':fist:' || message.content === ':hand_splayed:' || message.content === ':v:' || message.content === ':scissors:') {
    if (message.author.id !== '423186959712780298') {
      message.channel.send(rock_paper_scissors[Math.floor(Math.random() * rock_paper_scissors.length)]);
    }
  }
  
  if (message.author.id === '215956987815526400' && RegExp('(' + 'i' + ')\\s+(' + loves.join("|") + ')\\s+(' + yous.join("|") + ')').test(message.content) && maid_johns_names.some(maid_johns_name => message.content.includes(maid_johns_name))) {
    message.channel.send('I love you too, John.');
  }
});

client.login(process.env.token);
