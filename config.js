const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
MONGODB: process.env.MONGODB || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=u7Q0ADDI#zO-9HSuO7mlv_MLg9t_NVKLTnPiwv7ysacPlLG6cj7I",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
