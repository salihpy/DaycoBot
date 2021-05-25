const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, MessageEmbed } = require('discord.js')


var prefix = ayarlar.prefix;


// msg komut //

client.on('ready', () => {
  console.log(`${client.user.tag}  Botu başarıyla giriş yaptı...`);
  client.user.setActivity('Youtube', { type: 'WATCHING' })
  .then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
  .catch(console.error);
});

// Özel mesaj // 
client.on('message', msg => {
    if (msg.content.toLowerCase() === 'günaydın') {
      msg.author.send('Günaydın :)');
    }
  });

// Yasaklı mesaj //
  
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hile') {
    msg.delete()
    msg.channel.send('Bu kelimeyi kullanmak yasak !!!');
  }
});
client.on('ready', () => {
  console.log('I am ready!');
});

// Kullanıcı Avatar 
client.on('message', message => {
  // Mesajı istedik
  if (message.content === 'avatar') {
   // Cevap olarak avatarımızı yolladı
    message.reply(message.author.displayAvatarURL());
  }
});



// Youtube Channel //

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'youtube') {
    msg.channel.send('https://www.youtube.com/channel/UCNez8_0lMB2PBTSuSLKYLKg');
  }
});




// Embed Message //

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'github') {
    const kanal = new MessageEmbed()

    .setTitle('Github Profil Statics')
    .setDescription('Github Adresime Aşşağıdan Ulaşabilirsiniz')
    .setAuthor('Dayco Bot')
    .setColor("RGB")
    .setThumbnail('https://cdn.discordapp.com/attachments/788140724151517234/846332494130315284/81695102.png')
    .addField(':loud_sound: Githubtan takip edin', 'https://github.com/tgasalih');
    message.channel.send(kanal);
  }
});


// Log Message Giriş //

client.on('guildMemberAdd', member => {
const logs = member.guild.channels.cache.find(channel => channel.name === 'logs');
logs.send(`${member} Aramıza katıldığın için teşekkürler`);
member.send(`https://tgasalih.xyz Websitesinden benim hakkında bilgilere ulaşabilirsin`)

});


// Log Message Çıkış //

client.on('guildMemberAddRemove', member => {
  const logs = member.guild.channels.cache.find(channel => channel.name === 'logs');
  logs.send(`${member} Aramızdan ayrıldı`);
  
  });
  






// Client İD //
client.login('CLİENT ID BURAYA 1234567890');
