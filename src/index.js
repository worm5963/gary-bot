import dotenv from 'dotenv'
import { Client, GatewayIntentBits, TextChannel } from 'discord.js'
import detectCommand from "./dispatcher.js";
import * as handlers from "./handlers.js";

console.log("Gary Version 1.0.3 Launching")

dotenv.config()

// const minecraftChannel = new TextChannel();
// let minecraftChannel = guild.channels.find(x => x.name == "minecraft");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates
    ],
});

client.login(process.env.DISCORD_TOKEN);

export default async function handleMessage(message, client) {
  const commandId = detectCommand(message.content);

  if (!commandId) return;

  const handler = handlers[commandId];

  if (typeof handler !== "function") {
    console.error(`Handler not found: ${commandId}`);
    return;
  }

  await handler({
    message,
    client
  });
}

// DON'T TOUCH THIS PART!!! IT WORKS!!!
// client.on("messageCreate", async (message) => {

//     console.log(message)

//     if (!message?.author.bot) {
//         message.channel.send(`Hi ${message.content}`);
//     }
// });

client.on("voiceStateUpdate", (oldState, newState) => {
    let oldChannel = oldState.channel;
    let newChannel = newState.channelId;
    let user = newState.member.user;
    if (oldChannel === null && newChannel !== null) {
        console.log("User joined the Minecraft voice channel");
        // minecraftChannel.send( user, " has joined the Minecraft voice channel!");
        newState.guild.channels.cache.find(x => x.name == "minecraft").send(`${user} has joined a voice channel!`);
    }
});


client.on("messageCreate", async (message) => {
    // console.log(message)

    if (message?.author.id != "1432758780206252173") {
        handleMessage(message, client);
    }
});
