module.exports = {
    name: "Support",
    description: "Command Description",
    category: "test",
    botPermission: [],
    authorPermission: [],
    ownerOnly: true,
    run: async (client, message, args) => {
        message.channel.send("https://discord.st/ctl here is the Support server.");
    }
}