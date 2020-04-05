const { Client, Util, RichEmbed, Collection } = require('discord.js');
var config = require("../config/config.json");
const moment = require("moment");

module.exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();

    } else {
        user = message.author;
    }

    const member = message.guild.member(user);
    let userinfo = {};
    userinfo.registered = moment.utc(message.guild.members.get(user.id).user.createdAt).format("dddd, MMMM Do, YYYY, hh:mm:ss");
    userinfo.joined = moment.utc(message.guild.members.get(user.id).joinedAt).format("dddd, MMMM Do, YYYY, hh:mm:ss");

    const embed = new RichEmbed()
    .setColor(0x0723a3)
    .setThumbnail(user.avatarURL)
    .setTitle('**__User Information__**')
    .addField('**User:**', user.tag)
    .addField('**ID:**', user.id)
    .addField('**Registered:**', userinfo.registered)
    .addField('**Joined:**', userinfo.joined)
    .addField('**Current Status:**', user.presence.status)
    .addField('**Current Activity:**', user.presence.game ? user.presence.game.name : `none`, true)
    .setFooter('Ongaku Bot', client.user.displayAvatarURL);
    message.channel.sendEmbed(embed)
}

module.exports.help = {
    name: "userinfo"
}