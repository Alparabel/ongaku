const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let rock2 = ['Paper! You lost!', 'Scissors! You won!']
    let rock1 = Math.floor(Math.random() * rock2.length);

    let paper2 = ['Rock! You won!', 'Scissors! You lost!']
    let paper1 = Math.floor(Math.random() * paper2.length);

    let scissors2 = ['Rock! You lost!', 'Paper! You won!']
    let scissors1 = Math.floor(Math.random() * scissors2.length);

let rock = new Discord.RichEmbed()
    .setAuthor('Rock, Paper, Scissors')
    .setColor(0x0723a3)
    .addField('You choose', `${args[0]}`)
    .addField('I choose', rock2[rock1])
    .setFooter('Ongaku Bot', client.user.displayAvatarURL);

let paper = new Discord.RichEmbed()
    .setAuthor('Rock, Paper, Scissors')
    .setColor(0x0723a3)
    .addField('You choose', `${args[0]}`)
    .addField('I choose', paper2[paper1])
    .setFooter('Ongaku Bot', client.user.displayAvatarURL);

let scissors = new Discord.RichEmbed()
    .setAuthor('Rock, Paper, Scissors')
    .setColor(0x0723a3)
    .addField('You choose', `${args[0]}`)
    .addField('I choose', scissors2[scissors1])
    .setFooter('Ongaku Bot', client.user.displayAvatarURL);

if (message.content === 'o!rps rock') message.channel.send(rock)
if (message.content === 'o!rps r') message.channel.send(rock)

if (message.content === 'o!rps paper') message.channel.send(paper)
if (message.content === 'o!rps p') message.channel.send(paper)

if (message.content === 'o!rps scissors') message.channel.send(scissors)
if (message.content === 'o!rps s') message.channel.send(scissors)

    let clienticon = client.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setTitle('**__Command Usage__**')
    .setThumbnail(clienticon)
    .setColor('0x0723a3')
    .setDescription('**Options:**')
    .addField('Option 1:', 'rock or r')
    .addField('Option 2:', 'paper or p')
    .addField('Option 3:', 'scissors or s')
    .addField('**Usage:**', 'o!rps <option>')
    .setFooter('Ongaku Bot', client.user.displayAvatarURL);

if (message.content === 'o!rps') message.channel.send(embed)

}

module.exports.help = {
    name: "rps"
}