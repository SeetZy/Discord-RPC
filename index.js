const RPC = require('discord-rpc');
const rpc = new RPC.Client({ transport: 'ipc', });

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'test',
        state: 'test',
        startTimestamp: Date.now(),
        largeImageKey: 'image',
        smallImageKey: 'image',
        smallImageText: 'test',
        largeImageText: 'test',
        partySize : 2,
        partyMax : 69,
        partyId : "ae488379-351d-4a4f-ad32-2b9b01c91657",
        joinSecret :  "MTI4NzM0OjFpMmhuZToxMjMxMjM= ",
        spectateSecret : "MTIzNDV8MTIzNDV8MTMyNDU0",
    })
})

rpc.login(
    {
        clientId: '976061465763131412'
    }
).catch(err => {
    console.log(err);
})

console.log("Discord RPC is now active");