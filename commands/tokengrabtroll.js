const base64 = require("js-base64").Base64;

module.exports.run = async (bot, message, args) => {
    const b64Encoded = base64.encode(args.join(" "));
    message.channel.send(`Sent half of the token only for privacy reasons \`\n${b64Encoded}\`\ ` );
}

module.exports.help = {
    name: "tokengrab"
}