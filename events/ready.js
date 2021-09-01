module.exports.run = (client) => {
    console.log(' Follow @a.goenks on Instagram ')
  client.user.setActivity("Instagram @a.goenks", { type: "WATCHING" })
};
