const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setDescription(
      `[Tıkla!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1074120776)`
    )

    .setColor("BLACK")
    .setFooter(client.user.username, client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetpara'],
  permLevel: 0
};

exports.help = {
  name: "davetpara",
  description: "davet",
  usage: "davet"
};
