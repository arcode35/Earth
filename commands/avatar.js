const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if (args.join(" ") == "") {
        message.reply("`Please mention someone.`");
        return;
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) // Set author
            .setColor("#20f400") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image) // Set image in embed
        message.channel.send(embed); // Send embed
    }
}

module.exports.help = {
    name: "avatar"
}