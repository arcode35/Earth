const Discord = require("discord.js"); // Discord Module Required
exports.run = async (client, message, args) => { // if your cmd handler has different things than client, message etc change it

    let logs = message.guild.channels.find("name", "moderative-logs");
    if(!logs) return message.channel.send("`Please make a log channel with the name `moderative-logs` and make sure that I have permission to send messages in it.`");

    let user = message.mentions.users.first();
    if(!user) return message.channel.send("`Please mention a user`");

    let reason = args.join(" ");
    if(!reason) reason = "No reason given";

    message.guild.member(user).ban(reason);

    let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
        .setAuthor('User Banned', `https://cdn.discordapp.com/attachments/574777636253859884/575145086640324629/banned.png`)
        .setTitle("User Banned")
        .setFooter("User Ban Logs")
        .setColor("#ff0005")
        .setTimestamp()
        .addField("Banned User:", `${user}, ID: ${user.id}`)
        .addField("Reason:", reason)
        .addField("Moderator:", `${message.author}, ID: ${message.author.id}`)
        .addField("Time:", message.createdAt)
        .addField("Channel:", message.channel)

    logs.send(logsEmbed);
}
exports.help = {
    name: "ban"
}