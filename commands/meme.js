const Discord = require("discord.js");
const client = new Discord.Client();
const meme = require('memejs');

exports.run = async (bot, message, args, level) => { // eslint-disable-line no-unused-vars
    meme(function(data) {
        const embed = new Discord.RichEmbed()
            .setTitle(data.title[0])
            .setColor("RANDOM")
            .setImage(data.url[0])
            .setFooter('brought to you by Ice#9682 xd')
        message.channel.send({embed});
    })};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["meme", "memezzzzz"],
    permLevel: "User"
};

exports.help = {
    name: "meme",
    category: "Miscelaneous",
    description: "Memezzzz 4 life",
    usage: "meme"
};