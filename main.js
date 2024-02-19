const { readFileSync } = require("fs")
const path = require('path')
const Privs = JSON.parse(readFileSync(path.join(__dirname, 'praca_domowa.json')))
const Range = 3
function dejkod(data) {
  async function loskodos(kekw) {
    console.log(`Sprawdzando kodu: ${kekw.embeds[0].description.split('|')[2]}`)
    await fetch("https://earthlegacy.pl/shop/giftcards/add", {
      "credentials": "include",
      "headers": {
        "User-Agent": "samsung smart fridge",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "breaking bad",
        "Content-Type": "application/x-www-form-urlencoded",
        "Alt-Used": "earthlegacy.pl",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1"
      },
      "referrer": "https://earthlegacy.pl/shop/profile",
      "body": `_token=${Privs.SiteToken}&code=${kekw.embeds[0].description.split('|')[2]}`,
      "method": "POST",
      "mode": "cors"
    }).then(async (Response) => { console.log(Response.status); dupa() })
  }
  for (let x = 0; x < Range; x++) {
    if (data[x].embeds.length)
      loskodos(data[x])
  }
}
async function dupa() {
  await fetch(`https://discord.com/api/v9/channels/1179540478283239424/messages?limit=${Range}`, {
    "credentials": "include",
    "headers": {
      "User-Agent": "dupa12",
      "Accept": "*/*",
      "Accept-Language": "en-US,en;q=0.5",
      "Authorization": `${Privs.DiscordToken}`,
      "X-Super-Properties": "yes",
      "X-Discord-Locale": "c#",
      "X-Discord-Timezone": "centralArfica",
      "X-Debug-Options": "bugReporterEnabled",
      "Alt-Used": "discord.com",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://discord.com/channels/1114269172340375652/1192983187715006645",
    "method": "GET",
    "mode": "cors"
  }).then(async (Response) => { await Response.json().then((Resp) => { dejkod(Resp) }) })
}
dupa()
