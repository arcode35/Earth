const Discord = require("discord.js"); // Discord Module Required
exports.run = async (client, message, args) => { // if your cmd handler has different things than client, message etc change it

    let logs = message.guild.channels.find("name", "moderative-logs");
    if(!logs) return message.channel.send("`Please make a log channel with the name `moderative-logs` and make sure that I have permission to send messages in it.`");

    let user = message.mentions.users.first();
    if(!user) return message.channel.send("`Please mention a user`");

    let reason = args.join(" ");
    if(!reason) reason = "No reason given";

    message.guild.member(user).kick(reason);

    let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
        .setAuthor('User Kicked', `https://images-ext-2.discordapp.net/external/VE_R4fFNZS6jKOzGIxvCGHamzbZ7Y4YNPXMF9CMshzI/https/cdn2.iconfinder.com/data/icons/weby-interface-vol-1-1/512/s_minus-delete-remove-subtraction-subtract-512.png?width=461&height=461`)
        .setTitle("User Kicked")
        .setFooter("User Kick Logs")
        .setColor("#fffb42")
        .setTimestamp()
        .addField("Kicked User:", `${user}, ID: ${user.id}`)
        .addField("Reason:", reason)
        .addField("Moderator:", `${message.author}, ID: ${message.author.id}`)
        .addField("Time:", message.createdAt)
        .addField("Channel:", message.channel)

    logs.send(logsEmbed);
}
exports.help = {
    name: "kick"
}