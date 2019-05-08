const Discord = require("discord.js");
const bot = new Discord.Client
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "389140554996252702") return;
    let sv = bot.guilds.get(args[0])
    if (!sv) return message.channel.send(`Make sure I am in the server so I can make an invite lol`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

}
module.exports.help = {
    name: "getinvite"
}


//AND YOU MUST HAVE THE ID OF THE SERVER.
//This is a new event
bot.on("guildCreate", guild => {
    let guildCreate = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .addField("Someone added my bot, server name:", guild.name)
        .addField("And their id was:", guild.owner.id)
        .addField("With guild ID: ", guild.id)

    bot.users.get("389140554996252702").send(guildCreate)
});
