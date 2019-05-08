exports.run = (bot, message, args) => {
    const reason = args.slice(1).join(' ');
    bot.unbanReason = reason;
    bot.unbanAuth = message.author;
    const user = args[0];
    const modlog = bot.channels.find('name', 'moderative-logs');
    if (!modlog) return message.reply('Please make a log channel with the name `moderative-logs` and make sure that I have permission to send messages in it.');
    if (reason.length < 1) return message.reply('Please supply a reason for the unban.');
    if (!user) return message.reply('Please supply a user id to unban.').catch(console.error);
    message.guild.unban(user);
    message.reply(`Successfully unbanned <@${user}>`)
};

module.exports.help = {
    name: "unban"
}