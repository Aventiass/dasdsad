const { Ramalcim, permis } = require("../../../Helpers/Schemas")
const { ytKapat, guvenli } = require("../../../Helpers/function")
class webhookUpdate {
  Event = "webhookUpdate"
  async run(channel) {
    const ramal = await Ramalcim.findOne({ guildID: config.guildID })
    if (ramal.serverGuard === true) try {
        const entry = await channel.guild.fetchAuditLogs({ type: 'WEBHOOK_CREATE' }).then(audit => audit.entries.first())
        if (!entry || Date.now() - entry.createdTimestamp > 5000 || await guvenli(entry.executor.id)) return;
        ytKapat(config.guildID)
    } catch (error) { console.log(`Etkinlik : Webhook Create - Hata : ` + error) }
  }
}

module.exports = webhookUpdate