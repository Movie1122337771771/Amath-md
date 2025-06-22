//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFAxdzkxR3RTb0prSFlkY3BhWUpKcXlETHJBWStiRmVMVXM3VDZhU1lHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHpoeHRoYkVZbXdVTWNPOTFOQzE5bkw3VGc2ZzhiR0VteDVuRUl3Mnl4Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTVdnRWd6My8zRkxLU2gydHB5NUpaeE4vZ09qTDM2S3pKbXpyNEJiWGtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNcUVRN2RYc0RDTTVCUkc4OHZMQ3JCbFNzSVBaak9MbUdaOVZwN2NRUzFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QQmdOS21NMUxsN3l1Wk8wbjAyNUM0eldCSDEwNG82QlFHOUFoamVsRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNJVmwzbEdwZkp4WC9FM1lpZjVESlhzeENkZVVUNDFMNEs1QWFZVXRoalU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9mT2hpZnZLdEg2dzdLK05UNzBSSHFwOTJmczgzZUxmMkkwYm02bHpuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTk1vNjZFMXpvbURuM3luZm53bm5kWHUxWTNNK3ZoWWJiTlNJNWg1VXdRYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJUd2pDczRyT3RQbUZmTzlFd3ZSOEwrbG5TRmd1bXlWMk5KeFpZV3p6aUdadklUcTZDYmxvT0FzTFpwdXZyQkVHUUR6enk1amR5SmxPY2o1VFBxZEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6Ijd4aDBtQkYrb3NMWHd3eGp6MkxUdW56WUhGbnRjSUkvQ3dSYWJHalVmb3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InlDdGExblVVUzcyYUU0cVBVNmpFc0EiLCJwaG9uZUlkIjoiMDMxYTNmZjMtZmY2Zi00ZTBkLWIzZTgtZDZkNDA0YzU2ZjNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRwdjRZUnZReUhPQUZKbEY2YzdxbmdXV09nbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJicVIvUnBjanRucFU5RS9UQUFBNC9LTExrK2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRThMVzFETkEiLCJtZSI6eyJpZCI6Ijk0NzUzNDAwNTM2OjYzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU4NjYxMDQxMjI5ODU5OjYzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUhzdkpnSEVKYUc0TUlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNzVuRGVQZTN2ZFNLWkFZTTg5bFZibUsxczFYbjhRQUZlUVJkVExuNnBCTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidnBTZVdkMmFrS3JvRnBFSkxOeU5VRlNwN0dDbHlzRTVFeGZoa0JtdW5uTEtFTmdDOVFpbktSYXZDSDd1cjRqNlFvakdlUFJ1bUxKUkdod2tPYUNlQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjlrZjJ1OGRnZ2pRSC8reFMwemh4Vm5nYkk3bFhxcXhDTVBFR1FaR044SU9ncmJEd25rTmR0L0hWd2ZUNXRHRE5hVER5TnBCVlllTHZvT21JWFNSL0NRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTM0MDA1MzY6NjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZStadzNqM3Q3M1VpbVFHRFBQWlZXNWl0Yk5WNS9FQUJYa0VYVXk1K3FRVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FrSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNTk4NDM2LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0c1In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0753400536",
  PASSWORD: 
    process.env.PASSWORD || "Star pay 8",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94729478513", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "7RbI8PbYaLKNwOKcLnAgVrvd7L37Ld4VJoOr",
  USERNAME: "Movie1122337771771",
  REPO_NAME: "Amath-md",
};
