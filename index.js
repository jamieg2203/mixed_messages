
const sections = [
    [
        "The man",
        "The girl",
        "The dog",
        "The cat",
        "The uncle",
        "The binmen",
        "The jedi",
        "The penguin",
        "The chef",
        "The boss",
    ],
    [
        "skipped", 
        "carried",
        "planter",
        "pushed",
        "ran",
        "wrote",
        "caught",
        "felt",
        "saw",
        "walked",
    ],
    [
        "towards",
        "on",
        "by",
        "a",
        "over",
        "past",
        "through",
        "near",
        "ontop of",
        "between",
    ],
    [
        "cookie jar",
        "tissue box",
        "helmet",
        "video game",
        "flowers",
        "tree",
        "wife",
        "car",
        "shampoo",
        "pillow",
    ],
]

const messageSec1 = sections[0][Math.floor(Math.random(sections[0].length))];
const messageSec2 = sections[1][Math.floor(Math.random(sections[1].length))];
const messageSec3 = sections[2][Math.floor(Math.random(sections[2].length))];
const messageSec4 = sections[3][Math.floor(Math.random(sections[3].length))];

console.log(`${messageSec1} ${messageSec2} ${messageSec3} the ${messageSec4}`);


console.log(Math.floor(sections[2].length))
