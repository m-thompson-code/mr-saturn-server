console.log("Running Mr Saturn server");

import axios from 'axios';

import * as dotenv from 'dotenv';
dotenv.config();

import * as tmi from 'tmi.js';

import { firebaseInit } from './firebase/firebase';
import { CHANNEL_NAMES } from './configs/configs';

import * as moment from 'moment';

import { firestore } from "firebase/app";
import { getRand, substringsMatch, commandHasGreeting } from './helpers/helpers';
import { runPingServer } from './ping';

let _channel_names = CHANNEL_NAMES || process.env.CHANNEL_NAMES;

if (typeof _channel_names === 'string') {
    _channel_names = _channel_names.split(',');
}

// Create a client with using the twitchCerts from secrets and CHANNEL_NAMES from configs
const tmiClient = tmi.client({
    identity: {
        username: process.env.BOT_USERNAME || process.env.twitchBotUsername,
        password: process.env.OAUTH_TOKEN || process.env.twitchOAuthToken,
    },
    channels: _channel_names,
});

let state: 'disconnected' | 'error' | 'connected' = 'disconnected';

const main = async(): Promise<void> => {
    // Inintalize Firebase and import any services we want (firestore, auth)
    await firebaseInit();

    // Display when connected
    tmiClient.on('connected', (addr: string, port: number): void => {
        console.log(`* Connected to ${addr}:${port}`, moment().format('LL LTS'));
        state = 'connected';
    });

    tmiClient.on('disconnected', (reason: string): void => {
        console.error(reason);
        state = 'disconnected';
    });

    // Register our on message event handler
    tmiClient.on('message', onMessageHandler);

    setTimeout(() => {
        periodicPrompt();
    }, 30 * 1000 * 60);

    // Connect to Twitch
    tmiClient.connect();
}

const milkManCommand = async(command: string, channel: string, context: tmi.ChatUserstate): Promise<void> => {
    if (context && (context['display-name'] || context.username)) {
        const seed = Math.floor(Math.random());
        if (command[command.length - 1] === '?' || seed) {
            await tmiClient.say(channel, `@${context['display-name'] || context.username}, I am the milk man. My milk is delicious`);
        } else {
            await tmiClient.say(channel, `@${context['display-name'] || context.username}, who is the milkman?`);
        }
    } else {
        await tmiClient.say(channel, `Who is the milkman?`);
    }

    console.log(`* Executed ${command} command (milkman)`, moment().format('LL LTS'));
}

const sandwichCommand = async(command: string, channel: string, context: tmi.ChatUserstate): Promise<void> => {
    if (context && (context['display-name'] || context.username)) {
        await tmiClient.say(channel, `Hi @${context['display-name'] || context.username}. You get a sammich! 🥪`);
    } else {
        await tmiClient.say(channel, `Someone want a sammich? 🥪`);
    }

    console.log(`* Executed ${command} command (sandwich)`, moment().format('LL LTS'));
}

const diceCommand = async(command: string, channel: string): Promise<void> => {
    const seed = +(command.substring(2));

    if (seed > 0) {
        tmiClient.say(channel, "" + (Math.floor(Math.random() * seed) + 1));

        console.log(`* Executed ${command} command (dice)`, moment().format('LL LTS'));
    }
}

const botGreetingCommand = async(command: string, channel: string, context: tmi.ChatUserstate): Promise<void> => {
    if (context && (context['display-name'] || context.username)) {
        tmiClient.say(channel, `Hi @${context['display-name'] || context.username}. I am a good bot.`);
    } else {
        tmiClient.say(channel, `I am a good bot yes.`);
    }

    console.log(`* Executed ${command} command (bot greetings)`, moment().format('LL LTS'));
}

const juggalosCommand = async(command: string, channel: string, context: tmi.ChatUserstate): Promise<void> => {
    console.log(`* Executed ${command} command (juggalos)`, moment().format('LL LTS'));

    const person = context && (context['display-name'] || context.username) || "Someone";

    tmiClient.say(channel, `@${person} JUGALLOS!!!!`);
}

const botRPSCommand = async(command: string, channel: string, context: tmi.ChatUserstate): Promise<void> => {
    console.log(`* Executed ${command} command (rps)`, moment().format('LL LTS'));

    const msg = command.trim().toLowerCase();

    let request: 'paper' | 'sizzors' | 'rock' = 'paper';

    if (msg.includes('rock')) {
        request = 'rock';
    } else if (msg.includes('sizzor')) {
        request = 'sizzors';
    }

    const person = context && (context['display-name'] || context.username) || "Someone";

    const _seed = Math.floor(Math.random() * 15);

    if (_seed === 0) {
        tmiClient.say(channel, `@${person} choose ${request}. I chose rocket launcher. Looks like I win! Haha`);
        return;
    } else if (_seed === 1) {
        tmiClient.say(channel, `@${person} choose ${request}. I tried to use the 3rd option but got undefined instead. You win!`);
        return;
    } else if (_seed === 2) {
        tmiClient.say(channel, `@${person} choose ${request}. Why not choose love? What's love to you?`);
        return;
    }

    const seed = Math.floor(Math.random() * 3);

    const options: ('paper' | 'sizzors' | 'rock')[] = ['paper', 'sizzors', 'rock'];

    const response: 'paper' | 'sizzors' | 'rock' = options[seed];

    if (request === response) {
        tmiClient.say(channel, `@${person} choose ${request}. I chose ${response}. Looks like a draw.`);
    } else if (request === 'paper' && response === 'rock') {
        tmiClient.say(channel, `@${person} choose ${request}. I chose ${response}. Looks like you win...`);
    } else if (request === 'rock' && response === 'sizzors') {
        tmiClient.say(channel, `@${person} choose ${request}. I chose ${response}. Looks like you win...`);
    } else if (request === 'sizzors' && response === 'paper') {
        tmiClient.say(channel, `@${person} choose ${request}. I chose ${response}. Looks like you win...`);
    } else {
        tmiClient.say(channel, `@${person} choose ${request}. I chose ${response}. Looks like I win!`);
    }
}

const timeCommand = async(command: string, channel: string, context: tmi.ChatUserstate): Promise<void> => {
    console.log(`* Executed ${command} command (time)`, moment().format('LL LTS'));
    const timestampStr = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    const person = context && (context['display-name'] || context.username) || "Someone";

    tmiClient.say(channel, `@${person} ${timestampStr}`);
}

const storeLoveQuote = async(context: tmi.ChatUserstate, msg: string): Promise<string> => {
    const rand = getRand();

    const id = await firestore().collection("love").add({
        context: context,
        rand: rand,
        msg: msg
    }).then(docRef => {
        console.log(" * Stored love quote in firebase", rand, docRef.id);
        return rand;
    });

    return id;
}

const getRandomLoveQuote = async(rand?: string): Promise<{id: string, quote: string} | undefined> => {
    const _rand = rand || getRand();
    if (rand) {
        console.log(' ~ love seed', rand, '->', _rand);
    }

    const _querySnapshot_1 = await firestore().collection("love").where("rand", ">=", _rand).get();
    if (_querySnapshot_1 && _querySnapshot_1.size) {
        const data = _querySnapshot_1.docs[0].data();

        return {
            id: data.rand,
            quote: `${data.msg} - ${data.context && data.context['display-name'] || 'unknown display-name'}`,
        };
    } else {
        const _querySnapshot_2 = await firestore().collection("love").where("rand", "<=", _rand).get();
        if (_querySnapshot_2 && _querySnapshot_2.size) {
            const data = _querySnapshot_2.docs[0].data();

            return {
                id: data.rand,
                quote: `${data.msg} - ${data.context && data.context['display-name'] || 'unknown display-name'}`,
            };
        }
    }

    return undefined;
}

const getLoveQuoteByID = async(loveID: string): Promise<{id: string, quote: string} | undefined> => {
    console.log(' ~ getLoveQuoteByID', loveID);

    const _querySnapshot = await firestore().collection("love").where("rand", "==", loveID).get();

    if (_querySnapshot && _querySnapshot.size) {
        const data = _querySnapshot.docs[0].data();

        return {
            id: data.rand,
            quote: `${data.msg} - ${data.context && data.context['display-name'] || 'unknown display-name'}`,
        };
    }

    return undefined;
}

const deleteLoveQuoteByID = async(loveID: string): Promise<boolean> => {
    console.log(' ~ deleteLoveQuoteByID', loveID);

    const _querySnapshot = await firestore().collection("love").where("rand", "==", loveID).get();

    let deleted = false;
    _querySnapshot.forEach((doc) => {
        doc.ref.delete();
        deleted = true;
    });

    return deleted;
}

const periodicPrompt = (): void => {
    for (let CHANNEL_NAME of CHANNEL_NAMES) {
        const split = CHANNEL_NAME.split('#');
        const channel = split[split.length - 1];

        tmiClient.say(channel, `Hey chat! Teach me what love is by typing "Love is <insert the rest of the quote>". What is love?`);

        console.log(`* Executed periodicPrompt ~`, moment().format('LL LTS'));
    }

    setTimeout(() => {
        periodicPrompt();
    }, 30 * 1000 * 60 + Math.random() * 30 * 1000 * 60);
}

let lastLoveID: null | string = null;

const updateJumpScareTimestamp = (): Promise<void> => {
    console.log(" ~ updateJumpScareTimestamp called");

    return firestore().collection("saturns").doc('settings').update({
        jumpScareTimestamp: Date.now() + 1000 * 60 * 60 * 1,// 1 hour
    });
}

// Called every time a message comes in
const onMessageHandler: (channel: string, context: tmi.ChatUserstate, rawMsg: string, self: boolean) => void = async(channel: string, context: tmi.ChatUserstate, rawMsg: string, self: boolean) => {
    // Ignore messages from the bot 
    if (self) { return; }

    // Remove whitespace from chat message
    const msg = (rawMsg || "").trim();
    const command = msg.toLowerCase();
    const parts = command.split(' ');

    console.log(" * Message: ", context && context['display-name'] || 'unknown display-name', `(${context && context.username || 'unknown username'})`, rawMsg);

    for (const part of parts) {
        if (part === 'hate' || part === 'help' || part === 'dislike' || part === "don't" || part === "never" || part === "heart") {
            setTimeout(() => {
                updateJumpScareTimestamp();
            }, 15 * 1000);
        }
    }

    if (command.includes('moo command')) {
        for (let CHANNEL_NAME of CHANNEL_NAMES) {
            const split = CHANNEL_NAME.split('#');
            const channel = split[split.length - 1];

            tmiClient.say(channel, `olive x<#> | clear olives | milkman | sandwich | mona lisa | !d<#> | love is <rest of the quote> | what is love? | memory id | memory quote <memory id> | forget memory <memory id>`);

            console.log(`* Executed ${command} command (moo commands) ~`, moment().format('LL LTS'));
        }

        return Promise.resolve();
    }

    if (command.includes('memory quote') || command.includes('love quote')) {
        const parts = command.split(' ');

        const loveID = parts[parts.length - 1];

        const _q = await getLoveQuoteByID(loveID);

        if (_q && _q.quote) {
            for (let CHANNEL_NAME of CHANNEL_NAMES) {
                const split = CHANNEL_NAME.split('#');
                const channel = split[split.length - 1];

                tmiClient.say(channel, `${_q.quote}`);
                lastLoveID = _q.id;
    
                console.log(`* Executed ${command} command (memory quote) ~#${loveID}~ 200`, moment().format('LL LTS'));
            }
        } else {
            console.log(`* Executed ${command} command (memory quote) ~#${loveID}~ 404`, moment().format('LL LTS'));
        }

        return Promise.resolve();
    }

    if (command.startsWith('forget memory') || command.startsWith('forget love')) {
        // moomoomamoo - '36547695'
        if (!context || (!context.mod && context['user-id'] !== '36547695')) {
            console.warn(" ~ forgot memory canceled since not mod context");
            return Promise.resolve();
        }

        const parts = command.split(' ');

        const loveID = parts[parts.length - 1];

        await deleteLoveQuoteByID(loveID);

        if (loveID) {
            for (let CHANNEL_NAME of CHANNEL_NAMES) {
                const split = CHANNEL_NAME.split('#');
                const channel = split[split.length - 1];
    
                tmiClient.say(channel, `forgot love quote id ${loveID}`);
    
                console.log(`* Executed ${command} command (forgot love id) ~#${loveID}~`, moment().format('LL LTS'));
            }
        }

        return Promise.resolve();
    }

    if (command.includes('memory id') || command.includes('love id') || command.includes('quote id')) {
        // if (lastLoveID) {
            for (let CHANNEL_NAME of CHANNEL_NAMES) {
                const split = CHANNEL_NAME.split('#');
                const channel = split[split.length - 1];
    
                tmiClient.say(channel, `last memory quote id ${lastLoveID || '<none>'}`);
    
                console.log(`* Executed ${command} command (love id) ~#${lastLoveID}~`, moment().format('LL LTS'));
            }
        // }

        return Promise.resolve();
    }

    // If the command is known, let's execute it
    if (command.includes('woop woop') || command.includes('whoop whoop')) {
        await juggalosCommand(command, channel, context);
    } else if (parts.includes('paper') || parts.includes('rock') || parts.includes('sizzor')) {
        await botRPSCommand(command, channel, context);
    } else if (parts.includes('time')) {
        await timeCommand(command, channel, context);
    } else if (command.includes('milk')) {
        await milkManCommand(command, channel, context);
    } else if (command.includes('sandwich') || command.includes('sammich')) {
        await sandwichCommand(command, channel, context);
    } else if (/\!(d|D)([1-9]|0)+/.test(command)) {
        await diceCommand(command, channel);
    } else if (command.includes('bot') && (command.includes('moo') || command.includes('cow')) && commandHasGreeting(command)) {
        await botGreetingCommand(command, channel, context);
    }

    // Store the latest message of the channel
    // This will trigger the Mr. Saturn client app
    if (context) {
        await firestore().collection("saturns").doc(channel || "unknown_channel").collection('contexts').doc("" + (context.username || context['display-name'] || Date.now())).set(context);
        await firestore().collection("saturns").doc('chat').set({
            timestamp: Date.now(),
            msg: msg || "",
            'display-name': context && context['display-name'] || 'unknown display-name',
            username: context && context.username || 'unknown username',
            context: context || null,
        });
    }

    // Check if command starts with 'love is'
    if (command.indexOf('love is') === 0) {
        // Store the message if it does
        const id = await storeLoveQuote(context, msg);
        console.log(" * Stored love quote", context && context["display-name"] || 'unknown display-name', id, msg);
        tmiClient.say(channel, ` * Stored love quote ~love #${id}~`);
        return;
    }

    const id = command.split('love #')[1];

    const loveQuote = await getRandomLoveQuote(id);

    // Only 1 in 3 chance to spawn "relatable" love quote
    const _otherSeed = Math.floor(Math.random() * 3);

    if (loveQuote) {
        // If command includes love or command is a subset of loveQuote (or vice versa)
        // Say love quote
        if (command.indexOf('love') !== -1) {
            for (let CHANNEL_NAME of CHANNEL_NAMES) {
                const split = CHANNEL_NAME.split('#');
                const channel = split[split.length - 1];

                tmiClient.say(channel, `${loveQuote.quote}`);
                lastLoveID = loveQuote.id;

                console.log(`* Executed ${command} command (get love quote 1) ~#${loveQuote.id}~`, moment().format('LL LTS'));
            }
        } else if (_otherSeed === 0 && substringsMatch(loveQuote.quote, command)) {
            for (let CHANNEL_NAME of CHANNEL_NAMES) {
                const split = CHANNEL_NAME.split('#');
                const channel = split[split.length - 1];

                tmiClient.say(channel, `${loveQuote.quote}`);
                lastLoveID = loveQuote.id;

                console.log(`* Executed ${command} command (get love quote 2) ~#${loveQuote.id}~`, moment().format('LL LTS'));
            }
        } else if (command.includes(loveQuote.id)) {
            for (let CHANNEL_NAME of CHANNEL_NAMES) {
                const split = CHANNEL_NAME.split('#');
                const channel = split[split.length - 1];

                tmiClient.say(channel, `${loveQuote.quote}`);
                lastLoveID = loveQuote.id;

                console.log(`* Executed ${command} command (get love quote 3) ~#${loveQuote.id}~`, moment().format('LL LTS'));
            }
        }
    }
}

main().catch(error => {
    console.error(error);
    
    state = 'error';
});

runPingServer();

const getClientStateIsStable = () => {
    const _state = tmiClient.readyState();

    if (_state === 'OPEN' || _state === 'CONNECTING') {
        return true;
    } else if (state === 'connected') {
        return true;
    }

    return false;
}

const ping = () => {
    // Keep the server alive on glitch
    const pingUrl = "https://m-thompson-code-mr-saturn-server.glitch.me/ping";

    setInterval(() => {
        // console.log(`ping: ${pingUrl} - PENDING . . .`);

        axios.get(pingUrl).then(_res => {
            console.log(`ping: ${pingUrl} - SUCCESS`, moment().format('LL LTS'));
        }).catch(error => {
            // silence
            console.error(error);
            console.error(`ping: ${pingUrl} - ERROR`, moment().format('LL LTS'));
        });

        if (!getClientStateIsStable()) {
            console.error("Detected tmi client is not running -> calling main()");
            main();
        }
    }, 1000 * 60 * 5);
}

try {
    ping();
} catch(error) {
    console.error(error);
    ping();
}
