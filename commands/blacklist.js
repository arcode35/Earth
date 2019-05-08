const Discord = require('discord.js')
const fs = require('fs');
var config = require('../config.json');
const db = require('quick.db');

var owner = config.owner;

exports.run = async (client, message, args) => {
    if ( message.author.id != config.owner){
        message.channel.send("**Only developers are authorized to use this command**")
    }else{
        let object = args[0]
        if (!object) return message.channel.send('Unsuccessfully blacklisted user.')

        db.set(`user blacklist${object}`, 'active')
        const obstacle = new Discord.RichEmbed()
            .setTitle("Blacklist")
            .setColor("GREEN")
            .setDescription(":ballot_box_with_check: Successfully blacklisted user`" + object + "`User/Server will no longer be able to use Earth")
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setThumbnail(message.author.avatarURL)
            .addField("\n" + "Blacklisted ID: ", object)
        message.channel.send(obstacle)
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["blacklist"],
    permLevel: 4
};

exports.help = {
    name: 'blacklist',
    description: '',
    usage: 'blacklist'
};

//XiR