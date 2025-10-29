import dotenv from 'dotenv'
import { Client, GatewayIntentBits, TextChannel } from 'discord.js'

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

// DON'T TOUCH THIS PART!!! IT WORKS!!!
client.on("messageCreate", async (message) => {

    console.log(message)

    if (!message?.author.bot) {
        message.channel.send(`Hi Sam${message.content}`);
    }
});

client.on("voiceStateUpdate", (oldState, newState) => {
    let oldChannel = oldState.channel;
    let newChannel = newState.channelId;
    let user = newState.member.user;
    if (oldChannel === null && newChannel !== null) {
        console.log("User joined the Minecraft voice channel");
        // minecraftChannel.send( user, " has joined the Minecraft voice channel!");
        newState.guild.channels.cache.find(x => x.name == "minecraft").send(`${user} has joined the Minecraft voice channel!`);
    }
});




