const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");

function execute(client, dbq, has_play, config, utils) {
  const { prefix } = utils;

  client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const commandChannel = await dbq.get(`commandChannel_${message.guild.id}`);
    if (!commandChannel || message.channel.id !== commandChannel) return;

    if (message.content.startsWith(prefix + 'العاب')) {
      const embed = new EmbedBuilder()
        .setAuthor({ 
          name: message.guild.name,
          iconURL: message.guild.iconURL({ dynamic: true })
        })
        .setThumbnail('https://cdn.discordapp.com/attachments/1271810854391906335/1484053325010833478/14.jfif?ex=69bcd3dd&is=69bb825d&hm=6ef271ee2ae1bada227c8c9c24fd595d8b4dd68632e123b8403b40c3988cfccf&')
        .setTitle("**KLR / Commandes**")
        .addFields(
          {
            name: "الألعاب الجماعية",
            value: `
${prefix}روليت
${prefix}هايد
${prefix}لغم
${prefix}وصل
${prefix}مافيا
${prefix}كراسي
${prefix}اكس
${prefix}حجره
${prefix}ايفنت
${prefix}تصويت
            `,
            inline: true
          },
          {
            name: "الألعاب الفردية",
            value: `
${prefix}اسرع
${prefix}فكك
${prefix}اشبك
${prefix}عکس
${prefix}حرف
${prefix}جمع
${prefix}مفرد
${prefix}عواصم
${prefix}اعلام
${prefix}صحح
${prefix}اعكس
${prefix}ضرب
${prefix}طرح
${prefix}ادمج
${prefix}جمع
${prefix}شركه
            `,
            inline: true
          },
          {
            name: "أوامر أخرى",
            value: `
${prefix}توب
${prefix}تحويل
${prefix}نقاطي
${prefix}ايقاف
            `,
            inline: true
          }
        )
        .setFooter({ text: "KLR", iconURL: "https://cdn.discordapp.com/attachments/1271810854391906335/1484053325010833478/14.jfif?ex=69bcd3dd&is=69bb825d&hm=6ef271ee2ae1bada227c8c9c24fd595d8b4dd68632e123b8403b40c3988cfccf&" })
        .setColor("#ffffff");

      const button = new ButtonBuilder()
        .setLabel("Support Server")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/Ukb8wzBXJX");

      const row = new ActionRowBuilder().addComponents(button);

      await message.channel.send({
        embeds: [embed],
        components: [row]
      }).catch(console.error);
    }
  });
}

module.exports = { execute };
