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

global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_19_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwLFxuICAgICAgICA0LFxuICAgICAgICAyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc4LFxuICAgICAgICA0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICA2NixcbiAgICAgICAgODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDUxLFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVGZtd09WeWhmYzN6YllJWFNRUTRJZ1BGeUZMUUltd0VZQ2xhcXE0UktMVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNEs1WVJTMFdTUTJtWHB4elAxT1RoUVwiLFxuICBcInBob25lSWRcIjogXCI5N2QzY2Y4MC05M2IwLTQwNzMtOTc3NC04YTY3N2FiYTBkN2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMTEzLFxuICAgICAgMjQsXG4gICAgICAyNTQsXG4gICAgICAxLFxuICAgICAgMTM0LFxuICAgICAgMTI0LFxuICAgICAgMjAwLFxuICAgICAgODMsXG4gICAgICAxNzYsXG4gICAgICA2MCxcbiAgICAgIDExNixcbiAgICAgIDE0MyxcbiAgICAgIDEzNixcbiAgICAgIDE5NyxcbiAgICAgIDExMSxcbiAgICAgIDIzNyxcbiAgICAgIDEyOSxcbiAgICAgIDI0NixcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAyNTAsXG4gICAgICAyMzEsXG4gICAgICAxMSxcbiAgICAgIDIxMCxcbiAgICAgIDE2MixcbiAgICAgIDM5LFxuICAgICAgMTA4LFxuICAgICAgMTQwLFxuICAgICAgODIsXG4gICAgICAxNzQsXG4gICAgICAyNDEsXG4gICAgICAxOTYsXG4gICAgICAyMjMsXG4gICAgICAxMSxcbiAgICAgIDEyNixcbiAgICAgIDExNCxcbiAgICAgIDE1LFxuICAgICAgNTcsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYllnekFRdEthNXNnWVlHeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRvNThodXQvUnhqbURwaWZma2d3TUpkYkc0STJ5TXQ5ZkZXdE1qRUY2bEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidjg1R3pIbmd3U2kwMkNJNFIraytDWlJsSjRPRXBTZm8zRlc5SnJ2cWVia2s1cmRKa0JQWjFaOVRmRSt3RDgvUkd6YVNDaTdNbVkxNmZHVUl3SnVvQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTTJseVZud3RHVjJJRFdnaEdJV3crMFNqUFhxblhxUzBRTytEVUE5b2d4M0Rhb0JpODAzcUl1SExTSGlLcXA3ODRLYWR1b1lXZ3g1c0hTZDVVMmdlRFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY1NzAwNjg2MDoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxpbmRva3VobGUgRGVzaWduc1wiLFxuICAgIFwibGlkXCI6IFwiNzQ4Nzg1NjA1NTEwMzY6MjFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY1NzAwNjg2MDoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NDA5MTQ1XG59Igp9"  // PUT your SESSION_ID 

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
