const Discord = require('discord.js');
const client = new Discord.Client()
require('dotenv').config();

// Your bot token
const TOKEN = process.env.DISCORD_TOKEN;

// A dictionary to map English typo to Thai text
const eng2thai = {
    '1': 'ๅ',
    '!': '+',
    '@': '๑',
    '2': '/',
    '3': '-',
    '#': '๒',
    '4': 'ภ',
    '$': '๓',
    '5': 'ถ',
    '%': '๔',
    '6': 'ุ',
    '^': 'ู',
    '7': 'ึ',
    '&': '฿',
    '8': 'ค',
    '*': '๕',
    '9': 'ต',
    '': '๖',
    '0': 'จ',
    ')': '๗',
    '-': 'ข',
    '_': '๘',
    '=': 'ช',
    '+': '๙',
    'q': 'ๆ',
    'Q': '๐',
    'w': 'ไ',
    'W': '"',
    'e': 'ำ',
    'E': 'ฎ',
    'r': 'พ',
    'R': 'ฑ',
    't': 'ะ',
    'T': 'ธ',
    'y': 'ั',
    'Y': 'ํ',
    'u': 'ี',
    'U': '๊',
    'i': 'ร',
    'I': 'ณ',
    'o': 'น',
    'O': 'ฯ',
    'p': 'ย',
    'P': 'ญ',
    '[': 'บ',
    '{': 'ฐ',
    ']': 'ล',
    '}': ',',
    '\\': 'ฃ',
    '|': 'ฅ',
    'a': 'ฟ',
    'A': 'ฤ',
    's': 'ห',
    'S': 'ฆ',
    'd': 'ก',
    'D': 'ฏ',
    'f': 'ด',
    'F': 'โ',
    'g': 'เ',
    'G': 'ฌ',
    'h': '้',
    'H': '็',
    'j': '่',
    'J': '๋',
    'k': 'า',
    'K': 'ษ',
    'l': 'ส',
    'L': 'ศ',
    ';': 'ว',
    ':': 'ซ',
    '\'': 'ง',
    '"': '.',
    'z': 'ผ',
    'Z': '',
    'x': 'ป',
    'X': ')',
    'c': 'แ',
    'C': 'ฉ',
    'v': 'อ',
    'V': 'ฮ',
    'b': 'ิ',
    'B': 'ฺ',
    'n': 'ท',
    'N': '์',
    'm': 'ท',
    'M': '?',
    ',': 'ม',
    '<': 'ฒ',
    '.': 'ใ',
    '>': 'ฬ',
    '/': 'ฝ',
    '?': 'ฦ',
    ' ': ' ',
};


client.on("ready", () => {
    console.log(`${client.user.tag} has connected to Discord!`);
});

client.on("message", message => {
    if (message.content.startsWith('!ome')) {
        const combinedMessage = message.content.slice(4).trim();
        try {
            const correctedText = [...combinedMessage].map(engChar => eng2thai[engChar] || engChar).join('');
            if (correctedText) {
                message.channel.send(`จริง ๆ ตั้งใจจะพิมพ์ว่า "${correctedText}"`);
            }
        } catch (error) {
            console.error('Error processing message:', error);
        }
    }
});

client.login(TOKEN);
