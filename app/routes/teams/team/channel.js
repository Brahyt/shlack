import Route from '@ember/routing/route';

export const ALL_CHANNELS = [
    {
      "id": "recruiting",
      "name": "recruiting",
      "description": "The Next Generation Of Recruiting. Find top talents today!",
      "teamId": "linkedin"
    },
    {
      "id": "jobs",
      "name": "Job hunting",
      "description": "Discover companies that fit you.",
      "teamId": "linkedin"
    },
    {
      "id": "tbt",
      "name": "throw back thursday",
      "description": "Remember the good old days? yay, us too.",
      "teamId": "ms"
    },
    {
      "id": "endgame",
      "name": "top secret",
      "description": "for your eyes only",
      "teamId": "avengers"
    },
    {
      "id": "dominate",
      "name": "catnip",
      "description": "exchange tips and best practicse on world domination",
      "teamId": "angrycat",
      "isDisabled": true
    },
    {
      "id": "funny",
      "name": "funny",
      "description": "think you got what it takes? Share your best memes / jokes here!",
      "teamId": "javascript"
    }
  ]
const ALL_MESSAGES = [
    {
      "teamId": "li",
      "channelId": "compliments",
      "userId": 2,
      "createdAt": "2019-04-21T17:48:33.421Z",
      "body": "Your penmanship is excellent!",
      "id": 1
    },
    {
      "teamId": "li",
      "channelId": "compliments",
      "userId": 1,
      "createdAt": "2019-04-21T17:54:38.556Z",
      "body": "I admire your punctuality",
      "id": 2
    },
    {
      "teamId": "li",
      "channelId": "general",
      "userId": 2,
      "createdAt": "2019-04-21T17:55:08.713Z",
      "body": "Hello shlack!",
      "id": 3
    },
    {
      "teamId": "li",
      "channelId": "general",
      "userId": 1,
      "createdAt": "2019-04-21T18:36:30.995Z",
      "body": "awda",
      "id": 11
    },
    {
      "teamId": "li",
      "channelId": "general",
      "userId": 1,
      "createdAt": "2019-04-21T18:40:34.648Z",
      "body": "wad",
      "id": 12
    },
    {
      "teamId": "li",
      "channelId": "general",
      "userId": 1,
      "body": "wdw",
      "createdAt": 1555872178322,
      "id": 13
    },
    {
      "teamId": "li",
      "channelId": "general",
      "userId": 1,
      "body": "awqwdqwqwdq",
      "enrichedBody": ["awqwdqwqwdq"],
      "createdAt": 1555872270175,
      "id": 14
    },
    {
      "teamId": "li",
      "channelId": "general",
      "userId": 1,
      "body": "qdq",
      "createdAt": 1555872790592,
      "id": 15
    },
    {
      "teamId": "li",
      "channelId": "general",
      "userId": 1,
      "body": "w",
      "createdAt": 1555872792437,
      "id": 16
    },
    {
      "teamId": "li",
      "channelId": "general",
      "userId": 2,
      "body": "Would you like to join my professional network?",
      "createdAt": 1555874498634,
      "id": 17
    },
    {
      "teamId": "li",
      "channelId": "general",
      "userId": 1,
      "body": "Hello developer, I looked at your profile and am impressed by your 14 years of COBOL experience. Are you happy in your current role?",
      "createdAt": 1555874584752,
      "id": 18
    },
    {
      "channelId": "bofny",
      "teamId": "avengers",
      "body": "Hey dudes",
      "userId": "3",
      "createdAt": 1556676377508,
      "id": 19
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": "\"How do you comfort a JavaScript bug?\" ",
      "userId": "14",
      "createdAt": 1556679721022,
      "id": 20
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": "I dunno.. you de-bug it?",
      "userId": "12",
      "createdAt": 1556679740793,
      "id": 21
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": "No man, You console it",
      "userId": "14",
      "createdAt": 1556679745885,
      "id": 22
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": " Why was the JavaScript developer sad?",
      "userId": "14",
      "createdAt": 1556679754017,
      "id": 23
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": "Because there are too many JS frameworks!",
      "userId": "11",
      "createdAt": 1556679782382,
      "id": 24
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": "Wrong! It's because he didn’t Node how to Express himself",
      "userId": "14",
      "createdAt": 1556679797050,
      "id": 25
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": "ha-ha",
      "userId": "11",
      "createdAt": 1556679800867,
      "id": 26
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": "Ok here's one:  Why do C# and Java developers keep breaking their keyboards?",
      "userId": "12",
      "createdAt": 1556679820803,
      "id": 27
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": "Mmm... because one of them tried to write a Hello World application in Java EE?",
      "userId": "14",
      "createdAt": 1556679939014,
      "id": 28
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": "Nah, it's because they both use strongly typed language",
      "userId": "12",
      "createdAt": 1556680157584,
      "id": 29
    },
    {
      "channelId": "funny",
      "teamId": "javascript",
      "body": "Seriously.",
      "userId": "13",
      "createdAt": 1556680172998,
      "id": 30
    },
    {
      "channelId": "endgame",
      "teamId": "avengers",
      "body": "Hey... has someone seen my hammer? I can't find it and I need a can opener...",
      "userId": "6",
      "createdAt": 1556680603106,
      "id": 31
    },
    {
      "channelId": "endgame",
      "teamId": "avengers",
      "body": "No, if you remember the exact date and time you last used it, I can open a time portal for you",
      "userId": "7",
      "createdAt": 1556680649251,
      "id": 32
    },
    {
      "channelId": "endgame",
      "teamId": "avengers",
      "body": "I'm pretty sure I saw whats-his-name take it. You might want to work out more or the hammer might choose *him* instead",
      "userId": "5",
      "createdAt": 1556680753815,
      "id": 33
    },
    {
      "channelId": "endgame",
      "teamId": "avengers",
      "body": "NO! I SHALL BRING THUNDER DOWN ON HIM!",
      "userId": "6",
      "createdAt": 1556680812491,
      "id": 34
    },
    {
      "channelId": "endgame",
      "teamId": "avengers",
      "body": "With which hand? Are you giving up the beer or Fortnite?",
      "userId": "5",
      "createdAt": 1556680973259,
      "id": 35
    },
    {
      "channelId": "dominate",
      "teamId": "angrycat",
      "body": "Meowhahaha! I crossed the 800K followers mark today!  One step closer to world domination 😈",
      "userId": "8",
      "createdAt": 1556681392393,
      "id": 36
    },
    {
      "channelId": "dominate",
      "teamId": "angrycat",
      "body": "What did you cats get up to today?",
      "userId": "8",
      "createdAt": 1556681406684,
      "id": 37
    },
    {
      "channelId": "dominate",
      "teamId": "angrycat",
      "body": "Oh and Penguin approached me for another book deal today. Apparently my last book has been hailed \"a literary classic\"...",
      "userId": "8",
      "createdAt": 1556681504008,
      "id": 38
    },
    {
      "channelId": "dominate",
      "teamId": "angrycat",
      "body": "Can you believe these human?",
      "userId": "8",
      "createdAt": 1556681514248,
      "id": 39
    },
    {
      "channelId": "dominate",
      "teamId": "angrycat",
      "body": "Pfff, 800K on what network? I have 400K fans on Facebook and they hail me as their \"fearsome dictator\", a \"prodigious Scotch drinker\" and \"the angriest cat in the world\"",
      "userId": "9",
      "createdAt": 1556681660966,
      "id": 40
    },
    {
      "channelId": "dominate",
      "teamId": "angrycat",
      "body": "AND I hold a Guinness world record  🏆, beat that Bub 🐈",
      "userId": "9",
      "createdAt": 1556681701911,
      "id": 41
    },
    {
      "channelId": "dominate",
      "teamId": "angrycat",
      "body": "*stretches* not that anyone's counting, but my videos have been been viewed over 325 million times on Youtube. ",
      "userId": "10",
      "createdAt": 1556681886829,
      "id": 42
    },
    {
      "channelId": "dominate",
      "teamId": "angrycat",
      "body": "Holding a Guinness World Record doesn't get us closer to world domination, meow. We need to think outside the box",
      "userId": "10",
      "createdAt": 1556681916083,
      "id": 43
    },
    {
      "channelId": "dominate",
      "teamId": "angrycat",
      "body": "But I looooooove cupboard boxes! ",
      "userId": "8",
      "createdAt": 1556681928716,
      "id": 44
    },
    {
      "channelId": "tbt",
      "teamId": "ms",
      "body": "Sigh, I miss having a job...",
      "userId": "3",
      "createdAt": 1556682112281,
      "id": 45
    },
    {
      "channelId": "tbt",
      "teamId": "ms",
      "body": "It was so nice to \"talk\" and help people around the world with their spelling mistakes!",
      "userId": "3",
      "createdAt": 1556682143644,
      "id": 46
    },
    {
      "channelId": "tbt",
      "teamId": "ms",
      "body": "Don't you miss it?",
      "userId": "3",
      "createdAt": 1556682148707,
      "id": 47
    },
    {
      "channelId": "tbt",
      "teamId": "ms",
      "body": "Tell me about it, they were so happy when they found the pinball game in Word 97",
      "userId": "4",
      "createdAt": 1556682251128,
      "id": 48
    },
    {
      "channelId": "tbt",
      "teamId": "ms",
      "body": "OHH and that flight simulator game in Excel! People always tried to shoot me for some reason",
      "userId": "3",
      "createdAt": 1556682314145,
      "id": 49
    },
    {
      "channelId": "tbt",
      "teamId": "ms",
      "body": "At least people remembers you and try to bring you back. I don't think anyone even use floppy disks installation any more...",
      "userId": "4",
      "createdAt": 1556682392864,
      "id": 50
    },
    {
      "channelId": "tbt",
      "teamId": "ms",
      "body": "I don't miss Windows 95 though. Dang he was slow!",
      "userId": "4",
      "createdAt": 1556682501011,
      "id": 51
    },
    {
      "channelId": "recruiting",
      "teamId": "linkedin",
      "body": "Hey guys, looking for a ninja rockstar software engineer. Must have 15 years of Rust experience and willing to take 80% compensation in equity. We have free lunches and table tennis in the office.",
      "userId": "15",
      "createdAt": 1556682816711,
      "id": 52
    },
    {
      "channelId": "recruiting",
      "teamId": "linkedin",
      "body": "Oh and the position is in Antarctica. Low income tax rate, free snow cones and the skiing is great!",
      "userId": "15",
      "createdAt": 1556682870302,
      "id": 53
    },
    {
      "channelId": "jobs",
      "teamId": "linkedin",
      "body": "LF new position. Our tech lead just decided to go with a COBOL/CoffeeScript stack and I'm getting out of here!!",
      "userId": "2",
      "createdAt": 1556682931336,
      "id": 54
    },
    {
      "channelId": "recruiting",
      "teamId": "linkedin",
      "body": "#ask Does anyone know the difference between Java and Javascript? ",
      "userId": "0",
      "createdAt": 1556682976168,
      "id": 55
    },
    {
      "channelId": "recruiting",
      "teamId": "linkedin",
      "body": "Ah nvm, probably doesn't matter. I'll just spray and pray",
      "userId": "0",
      "createdAt": 1556682987555,
      "id": 56
    },
    {
      "channelId": "jobs",
      "teamId": "linkedin",
      "body": "Somebody just gave me a LinkedIn endorsement for \"Copying & Pasting from Stackoverflow\" and \"Private API usage.\" Are they trying to tell me something?",
      "userId": "1",
      "createdAt": 1556683077121,
      "id": 57
    }
]
const ALL_USERS = [
    {
      "id": 0,
      "name": "Dilbert",
      "username": "dilbert",
      "iconUrl": "/assets/img/dilbert.jpg"
    },
    {
      "id": 1,
      "name": "Mike North",
      "username": "mike",
      "iconUrl": "/assets/img/mike.jpeg"
    },
    {
      "id": 2,
      "name": "Lisa Huang-North",
      "username": "lisa",
      "iconUrl": "/assets/img/lisa.jpeg"
    },
    {
      "id": 3,
      "name": "Clippy",
      "username": "clippy",
      "iconUrl": "/assets/img/clippy.png"
    },
    {
      "id": 4,
      "name": "office97",
      "username": "office",
      "iconUrl": "/assets/img/office97.png"
    },
    {
      "id": 5,
      "name": "Tony Stark",
      "username": "ironman",
      "iconUrl": "/assets/img/ironman.jpg"
    },
    {
      "id": 6,
      "name": "Thor",
      "username": "thor",
      "iconUrl": "/assets/img/thor.jpg"
    },
    {
      "id": 7,
      "name": "Dr Stephen Strange",
      "username": "strange",
      "iconUrl": "/assets/img/drstrange.jpg"
    },
    {
      "id": 8,
      "name": "Lil Bub",
      "username": "bub",
      "iconUrl": "/assets/img/cat.jpg"
    },
    {
      "id": 9,
      "name": "Colonel Meow",
      "username": "meow",
      "iconUrl": "/assets/img/colonel-meow.jpg"
    },
    {
      "id": 10,
      "name": "Maru",
      "username": "maru",
      "iconUrl": "/assets/img/maru.jpg"
    },
    {
      "id": 11,
      "name": "NodeJS",
      "username": "nodejs",
      "iconUrl": "/assets/img/node.png"
    },
    {
      "id": 12,
      "name": "Engineer Anon",
      "username": "anonymous",
      "iconUrl": "/assets/img/desk_flip.jpg"
    },
    {
      "id": 13,
      "name": "Typescript",
      "username": "typescript",
      "iconUrl": "/assets/img/ts.png"
    },
    {
      "id": 14,
      "name": "jQuery",
      "username": "jquery",
      "iconUrl": "/assets/img/jquery.png"
    },
    {
      "id": 15,
      "name": "boss man",
      "username": "boss",
      "iconUrl": "/assets/img/boss.jpg"
    }
]

export default class TeamsTeamChannelRoute extends Route {
  model({channelId}){
    const messages = ALL_MESSAGES.filter(x => x.channelId == channelId)
    const users = ALL_USERS
    return {
      messages,
      users
    }
  }
}
