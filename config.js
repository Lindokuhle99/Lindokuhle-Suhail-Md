const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="lindo.ndlangamandla99@gmail.com"
global.location="Durban, South frica."

global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa, Johannesburg";
global.github=process.env.GITHUB|| "https://github.com/Lindokuhle99/Lindokuhle-Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0087a0f2c1bc2446e4ce5.png" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Lindo Tech²²¹-ᴍᴅ" 


global.devs = "27657006860" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27657006860";

//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavalable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'

//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";

//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_05_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM4LFxuICAgICAgICA2OCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9HVy9LZTJsRmVuV1dPSzc0cGpwZ2R0UGx0OGMvRGM4LzVWYzd0T3BmRW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk42SzRqQjdnUUtxMzNBQ3M4VmVXSHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2Y0MWRmYjUtYzgxYS00ZDFjLTljODktNTFhODg0YzU5NDQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDI0NSxcbiAgICAgIDIzLFxuICAgICAgNTMsXG4gICAgICA0NixcbiAgICAgIDEyMSxcbiAgICAgIDYyLFxuICAgICAgMTU3LFxuICAgICAgMTIyLFxuICAgICAgMTIsXG4gICAgICAxNTcsXG4gICAgICAyMTksXG4gICAgICAxNDQsXG4gICAgICAyNTQsXG4gICAgICAxMzksXG4gICAgICAzMyxcbiAgICAgIDE1MCxcbiAgICAgIDI0NyxcbiAgICAgIDExNyxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgNjUsXG4gICAgICAyNDUsXG4gICAgICAyNDYsXG4gICAgICAxODMsXG4gICAgICAxMTYsXG4gICAgICAxMzIsXG4gICAgICAyMDMsXG4gICAgICAxMDIsXG4gICAgICA1OCxcbiAgICAgIDYsXG4gICAgICA3NyxcbiAgICAgIDEwOCxcbiAgICAgIDgsXG4gICAgICAxMCxcbiAgICAgIDE0OSxcbiAgICAgIDU4LFxuICAgICAgMTA3LFxuICAgICAgNTUsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYllnekFRNlk3RXN3WVlLU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRvNThodXQvUnhqbURwaWZma2d3TUpkYkc0STJ5TXQ5ZkZXdE1qRUY2bEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlJBNUd0UFpuNldzSnZKNlA4cnB6cUJXY3JMZGlDV1kvL1lDMVJ4MjRXTDA0K2NjbzluZ2RldExNQXFTWS96NWtCaExOMkFFQnNJdFlrSXFRL1cvQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZStDY25SbmxaZUlJR3BsR00vQWFpU1I2L3JZeDl5S1pWTGFxVTlKTUpjZ2ZuNFU4dHkwNFlIVjZ5ZFo2U2RFTUsxL3BRWkVvNVF4cnN1bk1RemdvaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY1NzAwNjg2MDozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxpbmRva3VobGUgRGVzaWduc1wiLFxuICAgIFwibGlkXCI6IFwiNzQ4Nzg1NjA1NTEwMzY6MzVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY1NzAwNjg2MDozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjgzNTAxXG59Igp9"  // PUT your SESSION_ID 

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Lindo Bot",
  packname: process.env.PACK_NAME || "Prince Oracle",
  botname : process.env.BOT_NAME  || "Lindokuhle Bot",
  ownername:process.env.OWNER_NAME|| "Lindokuhle Designs",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-TP0F47vWLcODoN4LxOtrT3BlbkFJbFyiRYh0dxHcLsk6OCjv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),

};

global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";

global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
