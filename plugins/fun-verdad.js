

const handler = async (m, {conn}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.fun_verdad

  global.verdad = tradutor.texto1;

  conn.reply(m.chat, `*┌────「 𝚟𝚎𝚛𝚍𝚊𝚍 」─*\n*“${pickRandom(global.verdad)}”*\n*└────「 𝙵𝙻𝙸𝙱𝚄 𝙱𝙾𝚃 」─*`, m);
};
handler.help = ['verdad'];
handler.tags = ['fun'];
handler.command = /^verdad/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}


