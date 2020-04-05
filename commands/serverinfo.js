const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setThumbnail(sicon)
    .setColor("0x0723a3")
    .setDescription("**__Server Information__**")
    .addField("Name", message.guild.name)
    .addField("ID:", message.guild.id)
    .addField("Region", message.guild.region)
    .addField("Members" + " [" + message.guild.memberCount + "]", message.guild.members.filter(member => member.presence.status == 'online').size + " online") // show online and total member
    //.addField("Channels:", message.guild.channels.size)
    .addField("Server Owner", message.guild.owner)
    .addField("Created On", message.guild.createdAt.toUTCString())
    .setFooter('Ongaku Bot', client.user.displayAvatarURL);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}