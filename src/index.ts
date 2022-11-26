import { Client, Events, GatewayIntentBits } from 'discord.js'

import { config } from 'dotenv'
config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, (c) => {
    console.log(`Logged in as ${c.user.tag}`)
    console.log(`Serving ${c.guilds.cache.size} guilds`)
    console.log(`Running on a ${process.env.NODE_ENV} environment`)
})

client.login(process.env.TOKEN)