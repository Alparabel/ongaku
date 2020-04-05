const Discord = require("discord.js");
var config = require("../config/config.json");

module.exports.run = async (client, message, args) => {

    if(args[0] == "help") return message.channel.send('Just use o!help instead.')

        let embed = new Discord.RichEmbed()
        .setAuthor(`Help Command!`, message.guild.iconURL)
        .setColor(0x0723a3)
        .setDescription(`${message.author.username} check your dms!`)

        let Sembed = new Discord.RichEmbed()
        .setColor(0x0723a3)
        .setAuthor(`Ongaku Help`)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(`I heard that you need my help!`)
        .addField('**My Prefix is**', 'o!')
        .addField('**These are my commands!**', '(wip)')
        .setFooter('Ongaku Bot', client.user.displayAvatarURL);

        let Sembed1 = new Discord.RichEmbed()
        .setColor(0x0723a3)
        .setAuthor(`Ongaku Help`)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription('**__Admin/Mod Commands__**')
        .addField('**clear**', '**Description:** This command clears the given amount of messages \n**Usage:** o!clear amount of messages to delete')
        .addField('**say**', '**Description:** This command lets me say what you want, also in different channels \n**Usage:** o!say (#channel) message')
        .setFooter('Ongaku Bot', client.user.displayAvatarURL);

        let Sembed2 = new Discord.RichEmbed()
        .setColor(0x0723a3)
        .setAuthor(`Ongaku Help`)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription('\n**__Info Commands__**')
        .addField('**botinfo**', '**Description:** This command gives you information about me! \n**Usage:** o!botinfo')
        .addField('**serverinfo**', '**Description:** This command gives you information about the server you use the command in! \n**Usage:** o!serverinfo')
        .addField('**userinfo**', '**Description:** This command gives you information about your account or the account of another user! \n**Usage:** o!userinfo (@user)')
        .addField('**avatar**', '**Description:** This command shows your avatar or the avatar of another user! \n**Usage:** o!avatar (@user)')
        .setFooter('Ongaku Bot', client.user.displayAvatarURL);

        let Sembed3 = new Discord.RichEmbed()
        .setColor(0x0723a3)
        .setAuthor(`Ongaku Help`)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription('\n**__Game Commands__**', '(trying to get more done)')
        .addField('**rock, paper, scissors/rps**', '**Description:** With this command you can play rps against me! \n**Usage:** Please use o!rps for explainaton!')
        .setFooter('Ongaku Bot', client.user.displayAvatarURL);

        let Sembed4 = new Discord.RichEmbed()
        .setColor(0x0723a3)
        .setAuthor(`Ongaku Help`)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription('\n**__Gif Commands__**')
        .addField('**cry**', '**Description:** If you have to cry use this command :( \n**Usage:** o!cry')
        .addField('**cuddle**', '**Description:** If you want to cuddle someone use this command! \n**Usage:** o!cuddle @user')
        .addField('**hug**', '**Description:** If you want to hug someone use this command! \n**Usage:** o!hug @user')
        .addField('**kiss**', '**Description:** If you want to kiss someone use this command! \n**Usage:** o!kiss @user')
        .addField('**pat**', '**Description:** If you want to pat someone use this command! \n**Usage:** o!pat @user')
        .addField('**slap**', '**Description:** If you want to slap someone use this command! \n**Usage:** o!slap @user')
        .addField('**smug**', '**Description:** If you want to smug us this command! \n**Usage:** o!smug')
        .setFooter('Ongaku Bot', client.user.displayAvatarURL);
        message.channel.send(embed)
        message.author.send(Sembed)
        message.author.send(Sembed1)
        message.author.send(Sembed2)
        message.author.send(Sembed3)
        message.author.send(Sembed4)
   
}

module.exports.help = {
    name: "help"
}