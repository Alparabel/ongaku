const Discord = require("discord.js");
var config = require("../config/config.json");

module.exports.run = async (client, message) => {
    let clienticon = client.user.displayAvatarURL;
    let owner = await client.fetchUser(config.ownerID);
    let serverembed = new Discord.RichEmbed()
    .setThumbnail(clienticon)
    .setColor("0x0723a3")
    .setDescription("**__Bot Information__**")
    .addField("Username", client.user.username)
    .addField("Created On", client.user.createdAt.toUTCString())
    .addField("Created By", owner.tag)
    .setFooter('Ongaku Bot', client.user.displayAvatarURL);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"botinfo"
}