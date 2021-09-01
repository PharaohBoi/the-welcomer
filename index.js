require('dotenv').config();
const discord = require("discord.js");
const db = require('quick.db');
 
const client = new discord.Client({
    disableEveryone: true
});
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});
client.on("guildMemberAdd", async member => {

  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {

    return;

  }

  

   let data = await canva.welcome(member, { link: "https://i.pinimg.com/originals/f3/1c/39/f31c39d56512dc8fbf30f9d0fb3ee9d3.jpg" })

 

    const attachment = new discord.MessageAttachment(

      data,

      "welcome-image.png"

    );

  

  

  client.channels.cache.get(chx).send("Welcome to our Server " + member.user.username, attachment);

});


client.login(process.env.BOT_TOKEN);



const mySecret = process.env['BOT_KEY']