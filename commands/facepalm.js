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
                q: 'anime facepalm',
                key: config.tenorkey,
                limit: 8
            });
        const embed = new discord.RichEmbed()
            .setTitle(`*facepalm* :(`)
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
    name: "facepalm"
}
