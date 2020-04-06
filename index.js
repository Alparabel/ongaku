const discord = require("discord.js");
const token = 'NjI1NjM0NzEyNDg0MDUzMDAy.Xopncg.Hxrm5-xKWWeBFaDk8k22msIGJik';
const wait = require("util").promisify(setTimeout);
let config = require("./config/config.json");
const fs = require('fs');
const newdate = new Date();
const client = new discord.Client({
    disableEveryone: true,
    autoReconnect: true
});
const ytdl = require ("ytdl-core");

const prefix = 'o!';

client.commands = new discord.Collection();

client.on('message', function(message){
    if (message.mentions.users.first() === client.user) {
        message.author1.send('Ongackstku')
    }
})

//load modules out of modules directory
try {
    console.log(`[${newdate}]===Loading Modules===`);
    fs.readdirSync(__dirname + '/modules/').forEach(function (file) {
        if (file.match(/\.js$/) !== null && file !== 'index.js') {
            console.log(`[${newdate}] ${file} loaded!`);
            let name = file.replace('.js', '');
            exports[name] = require('./modules/' + file);
        }
    });
} catch (err) {
    console.error(err);
}

//load commands out of commands directory
try {
    fs.readdir("./commands/", (err, files) => {
        let jsfile = files.filter(f => f.split(".").pop() === "js");
        if (jsfile.length <= 0) {
            console.log(`[${newdate}]Couldn't find commands.`);
            return;
        }
        console.log(`[${newdate}]===Loading Commands===`);
        jsfile.forEach((f, i) => {
            let props = require(`./commands/${f}`);
            console.log(`[${newdate}] ${f} loaded!`);
            client.commands.set(props.help.name, props);
        });
    });
} catch (err) {
    console.error(err);
}

//Handle Commands
client.on("message", async message => {
    //if (message.guild.id !== config.serverID) return;
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    let prefix = config.prefix;
    let content = message.content.replace(/\s+/g, ' ').trim().split(" ");
    let cmd = content[0];
    let args = content.slice(1);
    let file = client.commands.get(cmd.slice(prefix.length));
    if (file) file.run(client, message, args);
});

//Handle Modules
client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    exports.deletelink.run(message);
});

client.on('ready', () =>{
    console.log(`big boi is in town`);
    client.user.setActivity('epic gamer music', {type: "LISTENING"});

})

var servers = {};

client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'play':

            function play(connection, message){
                var server = servers[message.guild.id];

                server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

                server.queue.shift();

                server.dispatcher.on("end", function(){
                    if(server.queue[0]){
                        play(connection, message);
                    }else {
                        connection.disconnect();
                    }
                });


            }


            if(!args[1]){
                message.channel.send("you need to provide a link.");
                return;
            }

            if(!message.member.voiceChannel){
                message.channel.send("You must be in a voice channel.");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
                play(connection, message);
            })

            
        break;

        case 'skip':
            var server = servers[message.guild.id];
            if(server.dispatcher) server.dispatcher.end();
            message.channel.send("Skipping the song!")
        break;

        case 'leave':
            var server = servers[message.guild.id];
            if(message.guild.voiceConnection){
                for(var i = server.queue.length -1; i >=0; i--){
                    server.queue.splice(i, 1);
                }

                server.dispatcher.end();
                message.channel.send("Stopped the queue, leaving the voice channel!")
                console.log('stopped the queue')
            }
            
            if(message.guild.connection) message.guild.voiceConnection.disconnect();
        break;
        
    }
})

client.login(process.env.token);