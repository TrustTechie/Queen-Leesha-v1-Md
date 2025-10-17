const chalk = require("chalk")
const fs = require("fs")
//auto presence update

global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "a395f97fe99f4fad0e790d10af518b9a"
//===============SETTING MENU==================\\
global.thumbnail = fs.readFileSync("./data/image/thumb.jpg")
global.ig = 'https://wa.me/2347041560392'
global.yt = 'https://youtube.com/@trustbit-ch?si=4CW_b9ZA0ZH5X-tr'
global.ttowner = '-'
global.ownername = 'Kallmetrust 🇦🇱' 
global.owner = ['2348059475981'] // SETTINGS ARE ALSO IN THE DATABASE FOLDER 
global.ownernomer = '2347041560392'
global.socialm = 'https://github.com/TrustTechie'
global.location = 'Nigeria' 
//========================setting Payment=====================\\
global.nodana = '9155604141' // IT'S BLANK IF IT'S NOT EXISTING
global.nogopay = '0277331548' // IT'S BLANK IF IT'S NOT EXISTING 
global.noovo = '' // IT'S BLANK IF IT'S NOT EXISTING
//==================setting Payment Name===========================\\
global.andana = 'OPAY' // IT'S BLANK IF IT'S NOT EXISTING
global.angopay = 'WEMA' // IT'S BLANK IF IT'S NOT EXISTING
global.anovo = '' // IT'S BLANK IF IT'S NOT EXISTING
//==================setting bot===========================\\
global.botname = "Queen Leesha MD 🇦🇱"
global.ownernumber = '2348059475981'
global.botnumber = '2347041560392'
global.ownername = 'Kallmetrust'
global.ownerNumber = ["2347041560392@s.whatsapp.net"]
global.ownerweb = ""
global.websitex = ""
global.wagc = "https://whatsapp.com/channel/0029VanhHvkG8l5ABbPYM70K"
global.saluran = "https://whatsapp.com/channel/0029VanhHvkG8l5ABbPYM70K"
global.themeemoji = '☌ '
global.wm = "Kallmetrust"
global.botscript = 'https://github.com/TrustTechie/Queen-Leesha-v1-Md' //script link
global.packname = "𝗊ᥙᥱᥱᥒ ᥣᥱᥱsһᥲ 🌹"
global.author = "kᥲᥣᥣmᥱ𝗍rᥙs𝗍"
global.creator = "2347041560392@s.whatsapp.net"
//===========================//

global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
    menuh: '』––––––',
    menub: '┊☃︎ ',
    menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '😊',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            naga: "🐉",
            phonix: "🦅",
            kyubi: "🦊",
            griffin: "🦒",
            centaur: "🎠",
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

//new
global.prefix = ['.']
global.sessionName = 'session'
global.hituet = 0
//media target
global.thum = fs.readFileSync("./data/image/thumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./data/image/thumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./data/image/thumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./data/image/thumb.jpg") //ur thumb pic
global.defaultpp = 'https://files.catbox.moe/o8y469.jpg' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
wait:"*processing*",
   success: "done ✅",
   on: "Queen Leesha is active 💞", 
   off: "Queen Leesha is off ✨",
   query: {
       text: "ᥕһᥱrᥱ's 𝗍һᥱ 𝗍ᥱ᥊𝗍?",
       link: "ᥕһᥱrᥱ's 𝗍һᥱ ᥣіᥒk?",
   },
   error: {
       fitur: "𝗍һᥱrᥱ sᥱᥱms 𝗍᥆ ᑲᥱ ᥲᥒ іssᥙᥱ ᥕі𝗍һ 𝗍һіs 𝖿ᥱᥲ𝗍ᥙrᥱ. ⍴ᥣᥱᥲsᥱ rᥱᥲᥴһ ᥆ᥙ𝗍 𝗍᥆ mᥡ ᥆ᥕᥒᥱr(t.me/KallmeTrust)",
   },
   only: {
       group: "*🚫 ᴀᴄᴄᴇ𝘀𝘀 ʀᴇ𝘀ᴛʀɪᴄᴛᴇᴅ* , *ᴛʜɪ𝘀 ғᴇᴀᴛᴜʀᴇ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜ𝘀ᴇᴅ ɪɴ ɢʀᴏᴜᴘ ᴄʜᴀᴛ𝘀.*",
      private: "*ᴀᴄᴄᴇss ʀᴇsᴛʀɪᴄᴛᴇᴅ*, *ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ.*",
       owner: "*ᴀᴄᴄᴇss ʀᴇsᴛʀɪᴄᴛᴇᴅ* , *ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ʙʏ ᴍʏ ʟᴏᴠᴇʟʏ ᴏᴡɴᴇʀ*",
       admin: "*ᴀᴄᴄᴇss ʀᴇsᴛʀɪᴄᴛᴇᴅ* *ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ɪs ᴀɴ ᴀᴅᴍɪɴ*",
       badmin: "ᴘʟᴢ ᴋɪɴᴅʟʏ ᴍᴀᴋᴇ ᴍʏ ᴏᴡɴᴇʀ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴜsᴇ ᴛʜɪs ғᴇᴀᴛᴜʀᴇ",
       premium: "*ᴀᴄᴄᴇss ʀᴇsᴛʀɪᴄᴛᴇᴅ* *ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴘʀᴇᴍɪᴜᴍ ᴜsᴇʀs*",
   }
}
 
//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "pk-pIWAlRroXTOAigkWdHcYvmlmgzEQXuoMWbVAaLAVZswSRbEB"
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
