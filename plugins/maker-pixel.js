

const handler = async (m, {conn, usedprefix, text}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.maker_pixel

  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/pixelate', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/e435dfac2044750cc6efe.jpg'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', tradutor.texto1, m);
};
handler.help = ['pixel', 'difuminar'];
handler.tags = ['maker'];
handler.command = /^(pixel|pixelar|difuminar)$/i;
export default handler;
