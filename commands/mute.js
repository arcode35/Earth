const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("You need **KICK_MEMBERS** permissions for use this command.")
    const modlog = message.guild.channels.find(channel => channel.name === 'moderative-logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("`Couldn't find user.`")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.send('`Please specify a reason for the mute!`')
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(args[0] == "help"){
        message.reply("Usage: k!mute <user> <reason>");
        return;
    }
    let muteChannel = message.guild.channels.find(`name`, "moderative-logs");
    if (!muteChannel) return message.channel.send('**Please create a channel with the name `mod-logs`**')
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000003",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
        .setAuthor('User Muted', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
        .setTitle("User Muted")
        .setFooter("User Mute Logs")
        .setColor("#ffe900")
        .setTimestamp()
        .addField("Muted User:", `${user}, ID: ${user.id}`)
        .addField("Reason:", reason)
        .addField("Moderator:", `${message.author}, ID: ${message.author.id}`)
        .addField("Time:", message.createdAt)
        .addField("Channel:", message.channel)
    modlog.send(muteembed)


}


exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "mute"
}
