const discord = require('discord.js');
const request = require("node-superfetch");
var config = require("../config/config.json");

module.exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();

    } else {
        user = message.author;
    }
    try {
        const mentioned = args[0];
        const {
            body
        } = await request
            .get('https://api.tenor.com/v1/search')
            .query({
                q: 'anime cuddle',
                key: config.tenorkey,
                limit: 25
            });
        const embed = new discord.RichEmbed()
            .setTitle(`**${user.username}** is being cuddled by **${message.author.username}** ! :3`)
            .setColor(0x0723a3)
            .setImage(body.results[Math.floor(Math.random() * body.results.length)].media[0].gif.url)
            .setFooter('Ongaku Bot', client.user.displayAvatarURL);
        return message.channel.send({
            embed: embed
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports.help = {
    name: "cuddle"
}