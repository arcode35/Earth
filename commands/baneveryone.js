const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let BReason = args.join(" ").slice(0);
    if (!BReason) return message.reply("No Ban reason found!")
    if (message.author.id != 389140554996252702) return message.reply("`Only developers can use this command `")

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 389140554996252702) return message.channel.send("Not gonna ban my owner lmao");
        message.guild.member(f).ban(BReason);
        message.channel.send(`Banned ${f}!`);
    });
    C.send("Banned everyone ez");
}
module.exports.help = {
    name: "banall"
}