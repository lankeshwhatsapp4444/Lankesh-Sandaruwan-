const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=mihgwbpZ#BPBDE1UrL4vCLL2l3kb-KPPh_yTw6I0HvSzbW-InFKU",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? '': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '': process.env.GITHUB_AUTH_TOKEN,
MONGODB: process.env.MONGODB || "mongodb+srv://myrender971:iwS8N2qB3Q8wMw83@cluster0.he9fd.mongodb.net/"    
};
