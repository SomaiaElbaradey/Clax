// Modules
const mongoose = require('mongoose');
// Configuration
const { dbType } = require("../../startup/config").connectionStrings();
const dbStatusDict = ["Disconnected", "Connected", "Connecting", "Disconnecting"]
//----------------

module.exports.getServerStatus = async (req, res) => {
    // Render status web-page
    return res.send({
        serverStatus: `Listening on ${req.header("host")}`,
        dbType: dbType[0].toUpperCase() + dbType.slice(1),
        dbStatus: dbStatusDict[mongoose.connection.readyState]
    })
}
