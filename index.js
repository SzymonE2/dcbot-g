const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN } = require("./config.js")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '/afk') {

  }
});

/*
client.on('voiceStateUpdate', (oldState, newState) => {
    // check for bot
    //if (oldState.member.user.bot) return;

    const channel = client.channels.cache.find(channel => channel.name === 'ogolne');
    channel.send('@everyone aaaa');
})
*/



client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channelID;
    let oldUserChannel = oldMember.channelID;

    const channel2 = client.channels.cache.get('776728263334035476');
 
    if(newUserChannel === "824713613972733994")
    { 
        // User Joins a voice channel
        channel2.send("Hej @everyone! Ktoś czeka właśnie na rozmowę. Dołączcie!");
    }
    else{
        // User leaves a voice channel
        //channel2.send("Nikt już nie czeka na rozmowę :(");
    }
 });

 /*

 client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channelID;
    let oldUserChannel = oldMember.channelID;

    const channel2 = client.channels.cache.get('821364012033376289');
 
    if(newUserChannel === "821364012033376289")
    { 
        if(voiceChannel.members.size >= 2){
            client.move_member(message.author, channel)
        }
    }
 });
*/


client.login(TOKEN);
