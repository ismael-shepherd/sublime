//Here the command starts
module.exports = {
    //definition
    name: "reboot3", //the name of the command 
    category: "info", //the category this will be listed at, for the help cmd
    aliases: ["latency"], //every parameter can be an alias
    cooldown: 2, //this will set it to a 2 second cooldown
    usage: "reboot3", //this is for the help command for EACH cmd
    description: "Bote tempete", //the description of the command

    //running the command with the parameters: client, message, args, user, text, prefix
        run: async (client, message, args) => message.channel.send("|| <@&764803693538443305>  || __** TEMPETE ACTUELLEMENT EN COURS ! **__ "),
    }