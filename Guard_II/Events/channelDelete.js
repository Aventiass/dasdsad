const { Ramalcim, permis } = require("../../../Helpers/Schemas")
const { ytKapat, guvenli } = require("../../../Helpers/function")
class channelDelete {
  Event = "channelDelete"
  async run(channel) {
    const ramal = await Ramalcim.findOne({ guildID: config.guildID })
    if (ramal.channelGuard === true) try {
        let entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first());
        if (!entry || Date.now() - entry.createdTimestamp > 5000 || await guvenli(entry.executor.id)) return;
        ytKapat(config.guildID)  
      } catch (error) { console.log(`Etkinlik : Channel Delete - Hata : ` + error) }
  }
}

module.exports = channelDelete