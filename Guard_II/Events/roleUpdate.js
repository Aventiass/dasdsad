const { Ramalcim, permis } = require("../../../Helpers/Schemas")
const { ytKapat, guvenli } = require("../../../Helpers/function")
class roleUpdate {
  Event = "roleUpdate"
  async run(oldRole, newRole) {
    const ramal = await Ramalcim.findOne({ guildID: config.guildID })
    if (ramal.roleGuard === true) try {
        const entry = await newRole.guild.fetchAuditLogs({ limit: 1, type: 'ROLE_CREATE' }).then(audit => audit.entries.first());
        if (!entry || Date.now() - entry.createdTimestamp > 5000 || await guvenli(entry.executor.id)) return;
        ytKapat(config.guildID)  
    } catch (error) { console.log(`Etkinlik : Role Update - Hata : ` + error) }
  }
}

module.exports = roleUpdate