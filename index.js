const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`); 
  client.user.setActivity(`Maid at Room 5 Sandy`);
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'room-5');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}! I'm the maid serving this Server, Hammann. *Remember, don't be like others here, they're all perverts.*`);
});

client.on("message", async message => {
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
 if(command === "ping") {
    const m = await message.channel.send("Wait...");
    message.delete().catch(O_o=>{}); 
    m.edit(`OI! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.. PERVERT!!`);
  }

  if(command === "hugs") {
    message.channel.send(`Whaa?! Get away from me! Pervert! PERVERT! OFFICER!!!`);
  }
  
  if(command === "why") {
    message.channel.send(`Because you're a pervert.`);
  }
  
if(command === "poke") {
    message.channel.send(`Oi! Don't POKE me if you have nothing to do with me, you PERVERT!`);
  }

if(command === "say") {
  const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  
  }
  
});

client.on('message', (message) => {
  if(message.content.includes('nut')) {
    message.reply('PERVERT!!');
  }
  if(message.content.includes('hammann')) {
    message.reply('?? What? Pervert...');
}
  
});

client.login(config.token);
