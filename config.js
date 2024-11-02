const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=nuQXyYgD#YNkDwUCWBjP45gmfOZTpIIshQPW3QZ_e11ELvt09uFw",
MONGODB: process.env.MONGODB || "mongodb+srv://ajswrld123:<db_password>@cluster0.8fahf.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
