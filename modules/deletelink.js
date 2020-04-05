const config = require("../config/config.json");

module.exports.run = async (message) => {
    try{
        let reg = new RegExp("(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})");
        if(message.member.hasPermission("EMBED_LINKS")) return;
        if(message.content.match(reg) != null && message.content.match(reg).length > 0){
            message.channel.fetchMessage(message.id).then(async msg => {
                if(msg) msg.delete();
            })
        }
    }catch(err){
        console.error(err);
    }
};
