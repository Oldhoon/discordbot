import { Client, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config();

// create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// when client is ready run code once
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);