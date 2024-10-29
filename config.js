const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=qu5UVTqS#VZr4fRVvioxXPkJxfNZ7soxjwP2IiczdghQfsbAov48",
MONGODB: process.env.MONGODB || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=qu5UVTqS#VZr4fRVvioxXPkJxfNZ7soxjwP2IiczdghQfsbAov48",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
