const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=O7xT0CDD#8TexeFUTtHO2xlGCh-d0L0f6jSsdW2UUuAJ0cQcvV9s",
MONGODB: process.env.MONGODB || "https://cloud.mongodb.com/v2/6720b8d0b95c955b5d976ac5#/overview?connectCluster=Cluster0",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
