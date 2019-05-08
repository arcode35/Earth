const ms = require("ms");
const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {


    let reminderTime = args[0];
    if (!reminderTime) return message.channel.send("**Please specify the amount of time you want me to remind you in. Syntax: .remind 15min any text or code**");

    let reminder = args.slice(1).join(" ");

    let remindEmbed = new Discord.RichEmbed()
        .setColor('#13da00')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Reminder", `\`\`\`${reminder}\`\`\``)
        .addField("Time", `\`\`\`${reminderTime}\`\`\``)
        .setTimestamp();

    message.channel.send(remindEmbed);


    setTimeout(function() {
        let remindEmbed = new Discord.RichEmbed()
            .setColor('#1af421')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField("Reminder", `\`\`\`${reminder}\`\`\``)
            .setTimestamp()

        message.channel.send(remindEmbed);
    }, ms(reminderTime));

}
module.exports.help = {
    name: "remind"
};