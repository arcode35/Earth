const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {

    if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');

    if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');
    message.channel.bulkDelete(args[0])
        .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({
            timeout: 1000000
        })))

}

module.exports.help = {
    name: "purge"
}