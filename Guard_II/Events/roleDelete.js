const { Ramalcim, permis } = require("../../../Helpers/Schemas")
const { ytKapat, guvenli } = require("../../../Helpers/function")
class roleDelete {
  Event = "roleDelete"
  async run(role) {
    const ramal = await Ramalcim.findOne({ guildID: config.guildID })
    if (ramal.roleGuard === true) try {
        const entry = await role.guild.fetchAuditLogs({ limit: 1, type: 'ROLE_DELETE' }).then(audit => audit.entries.first());
        if (!entry || Date.now() - entry.createdTimestamp > 5000 || await guvenli(entry.executor.id)) return;
        ytKapat(config.guildID)  
    } catch (error) { console.log(`Etkinlik : Role Delete - Hata : ` + error) }
  }
}

module.exports = roleDelete