const schedule = require('node-schedule');
const slackBot = require('./slackBot')
const dotenv = require('dotenv');
dotenv.config();

const currentTime = new Date();
currentTime.setMinutes(currentTime.getMinutes() + 5);
const modifiedTime = currentTime.toLocaleString();
console.log(`esta tarea se ejecutara a las ${modifiedTime}`);
const job = schedule.scheduleJob(currentTime,() => {
    slackBot();
})