import { watchFile, unwatchFile } from 'fs'
import { fileURLToPath } from 'url'

global.namebot = "Neo AI"
global.thumbmenu = "https://i.ibb.co/Hfxx9mFM/image.png"
global.owner = [""] // ur id || example: 202095793848538
global.prefix = ["!", ".", ","]
global.premium = [""] // ur id || example: 202095793848538
global.sudo = [""]

global.mess = {
  wait: "Please wait a moment...",
  owner: "This feature is for owners only!",
  admin: "This feature is for admins only!",
  premium: "This feature is for premium users only!",
  group: "This feature can only be used in groups!",
  private: "This feature can only be used in private chats!"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  import(`${file}?update=${Date.now()}`)
})
