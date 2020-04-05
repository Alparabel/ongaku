const Discord = require("discord.js");
var config = require("../config/config.json");

module.exports.run = async (client, message, args) => {

    if (args[0] == undefined) {
        client.fetchUser(message.author.id).then(function (value) {
            const embed = new Discord.RichEmbed()
                .setColor(0x0723a3)
                .setTitle("Avatar of " + value.username)
                .setImage(value.displayAvatarURL)
                .setFooter('Ongaku Bot', client.user.displayAvatarURL);
            message.channel.send({
                embed: embed
            })
        })
    }
    else{
        const mentioned = args[0].replace(/^\D+|\D+$/g, "")
        client.fetchUser(mentioned).then(function (value) {
            const embed = new Discord.RichEmbed()
                .setColor(0x0723a3)
                .setTitle("Avatar of " + value.username)
                .setImage(value.displayAvatarURL)
                .setFooter('Ongaku Bot', client.user.displayAvatarURL);
            message.channel.send({
                embed: embed
            })
        })
    }
}

module.exports.help = {
    name: "avatar"
}