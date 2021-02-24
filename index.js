const discord = require("discord.js")
const client = new discord.Client()

const config = require("config.json")
const prefix = config.prefix, token = config.token

client.login(token)
