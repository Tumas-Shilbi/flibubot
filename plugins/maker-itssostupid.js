const handler = async (m, {conn, args}) => {
  const text = args.slice(1).join(' ');
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/its-so-stupid', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/e435dfac2044750cc6efe.jpg'),
    dog: text || 'im+stupid',
  }), 'error.png', `*@${author}*`, m);
};
handler.help = ['itssostupid', 'iss', 'stupid'];
handler.tags = ['maker'];
handler.command = /^(itssostupid|iss|stupid)$/i;
export default handler;
