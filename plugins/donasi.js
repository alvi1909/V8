let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6289625556161
│┝‷✧ *Dana:* 6289625556161
│┝‷✧ *Gopay:* 6289625556161
│┝‷✧ *Ovo:* 6289625556161
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6289625556161?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
