const { WebClient } = require('@slack/web-api');
const dotenv = require('dotenv');
dotenv.config();

const web = new WebClient(process.env.SLACK_BOT_USER_OAUTH_TOKEN);
const currentTime = new Date().toTimeString();

module.exports = async ()=>{
    try{
    await web.chat.postMessage({
        channel:process.env.SLACK_CHANNEL_ID,
        text:`tarea ejecutada a las ${currentTime}`,
    });

console.log('Message posted!');
} catch (error) {
console.log(error);
}

};

