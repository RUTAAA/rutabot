const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "-";

Client.on("ready", () => {
    console.log("Bot opérationnel");
});

Client.on("message", message => {
    if(message.author.username != "MEE6") return;
    message.react("💢")
});


Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == prefix + "TG" | message.content == prefix + "Tg" | message.content == prefix + "tg"){
        message.reply("**Toi TG**")
    }
    
    if(message.content == "TG" | message.content == "Tg" | message.content == "tg"){
        message.channel.send("**Toi TG**")
    }
});

Client.login(process.env.TOKEN);