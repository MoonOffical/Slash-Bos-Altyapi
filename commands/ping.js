const Discord = require("discord.js")
const db = require("croxydb");

module.exports = {
  name: "ping",
  description: "Botun pingini gösterir!",
  type: 1,
  options: [],
  run: async (client, interaction) => {

    const embed = new Discord.EmbedBuilder()
      .setTitle("Code World")
      .setDescription(`Pingim : ${client.ws.ping} ms`)
    await interaction.reply({ embeds: [embed] })
  }
}
