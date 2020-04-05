const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("I am sorry but you can not use this command!").then(msg => msg.delete(5000));
    if(!args[0]) return message.channel.send(`Error! Please tell me how many messages I should delete! \n __Usage:__ \n r.clear <amount of messages>`).then(msg => msg.delete(5000));
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(3000));
    })
}

module.exports.help = {
    name: "clear"
}