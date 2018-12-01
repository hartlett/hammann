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
    // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
 if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Wait...");
    message.delete().catch(O_o=>{}); 
    m.edit(`OI! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.. PERVERT!!`);
  }

  if(command === "hugs") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    message.channel.send(`Whaa?! Get away from me! Pervert! PERVERT! OFFICER!!!`);
  }
  
if(command === "poke") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    message.channel.send(`Oi! Don't POKE me if you have nothing to do with me, you PERVERT!`);
  }

  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

});

client.login(config.token);
