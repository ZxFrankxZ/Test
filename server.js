const Discord = require("discord.js");
const Client = new Discord.Client();
const fs = require("fs");

Client.login(process.env.SECRET);

Client.on('ready', async(message) => {
  console.log('Estoy on');
})

Client.on("message", function(message) {
  
if(message.content.startsWith('!!pb')) {
message.delete();

const embed = new Discord.RichEmbed()
    .setAuthor('Información de los rangos asequibles.', message.author.displayAvatarURL)
    .setDescription('**Rangos**\n▔▔▔▔▔▔▔▔▔▔▔')
    .addField('Dios', '1\u20e3')
    .addField('Leyenda', '2\u20e3')
    .addField('Héroe', '3\u20e3')
    .addField('Youtuber', '4\u20e3')
    .setFooter(message.author.tag)
    .setColor(0xffffff);
    let ubn = message.channel.send(embed).then((d) => {//lista de emoji https://github.com/Emzi0767/Devi-Discord-Selfbot/blob/master/emoji.json
      d.delete(15000)
      message.channel.send('$test').then((msg) => {
        msg.delete(15000)
      msg.edit('**Reacciona a un emoji para ver la información.**')
      })
    })
  }
  
  
  if(message.content.startsWith('$test')) {
    
    message.react('501111446810394634').then(() => {
      message.react('501111780597039105').then(() => {
        message.react('501114391878696961').then(() => {
          message.react('501114534501810176')
        })
      })
    
    });
        
const filter = (reaction, user) => {
    return ['501111446810394634', '501111780597039105', '501114391878696961', '501114534501810176'].includes(reaction.emoji.id) && user.id !== message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 15000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.id === '501111446810394634') {
          const Dios =new Discord.RichEmbed()
          .setAuthor('Información del rango Dios')
          .setColor(0xffffff)
          .setDescription('A continuación te mostrará los **comandos, kit** y **información,** de este rango.')
          .addField("**Comandos**\n▔▔▔▔▔▔▔▔▔▔▔", "**/fly:**Te permite volar\n**/heal:**Te recupera toda la vida", true)
          .addField("**Kit**\n▔▔▔▔▔▔▔▔▔▔▔", "penes enteros :v", true)
          .setImage('');//Poner la imagen del Dios
          message.channel.send({
            embed : Dios
  })
            message.channel.send('**Informacion Dios**');
            
        }
        else if (reaction.emoji.id === '501111780597039105') {
            message.channel.send('**Informacion Leyenda**');
            
        }
        else if (reaction.emoji.id === '501114391878696961') {
            message.channel.send('**Informacion Héroe**');
            
        }
        else if (reaction.emoji.id === '501114534501810176') {
            message.channel.send('**Informacion Youtuber**');
            
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
})
  }
  })
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
Client.on('message', (message) => {
  const args = message.content.split(" ").slice(1);
  if(message.content.startsWith("!!eval")) {
        try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
})






var Jimp = require('jimp');

Client.on('message', (message) => {
  if(message.author.bot) return;
Jimp.read(message.author.avatarURL, function (err, top) {
  top.resize(259, 259)
  top.quality(60)
  Jimp.read('https://cdn.discordapp.com/attachments/477279692844564500/503228970368499742/welcome.png', function (err, image) {
    if (err) console.log(err);
    image.composite(top, 56, 93);
    Jimp.read(image, function(err, images) {
    let img2 = Jimp.read('https://cdn.discordapp.com/attachments/477279692844564500/503228970368499742/welcome.png', function(err, img) {
    images.composite(img, 0, 0)
    Jimp.loadFont('').then(font => {
      images.print(font, 355, 149, message.author.username)
      
      images.getBuffer(Jimp.AUTO, (err, cb) => {
        if (err) throw err;
        message.channel.send({file: cb})
        })
        })
      })
    })
  })
})
  
})
