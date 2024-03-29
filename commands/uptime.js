const Discord = require("discord.js");
const moment = require("moment");
const config = require("../config.json");

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};



exports.run = (bot, message, args) => {



    let prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;




    let u = convertMS(bot.uptime);
    let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"




    const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL;
    const botembed = new Discord.RichEmbed()
        .setColor(`#21f400`)
        .addField(`**------------------------------Uptime------------------------------**`, `**Uptime :**  ${uptime}`)
        .setThumbnail(bicon)
        .setTimestamp(new Date())
        .setFooter(`Requested by ${message.author.tag}`);
    message.channel.send(botembed);
}




module.exports.help = {
    name: "uptime"
}