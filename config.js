const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=73pjURLI#XkLwAMHReKjZMK5dgXM6oWwwmaLvXY9n7nCN9diiF4w",
MONGODB: process.env.MONGODB || "mongodb://mongo:
ypiPXBRSzukoMcXtwNJKRASR
VEIHkAUSOjunction.proxy.rluy
net:34391",//enter mongo db url
};
