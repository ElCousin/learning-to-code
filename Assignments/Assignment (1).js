let readLine = require("readline-sync")

const elfName = "Alhmir"
const friendName = "Borthul"

narrativeMessage(`A group of adventurers are trying to look for their friends.`)
narrativeMessage(`They are at the top of a valley; there's a village few meters down from their position.`)
narrativeMessage(`One of them asks to his very perceptive and keep friend...\n`)

friendMessage(`-${friendName}: What do your elf eyes see, ${elfName}?`)

mainCharMessage(`-${elfName}: I see food and maybe a method for fast travel, if we can afford them...`)
let narrativeChoice = readLine.question(`-${elfName}: What do you think about, ${friendName}? (Y/N)\n-${friendName}: `)
if (PlayerSaidYes(narrativeChoice))
{
    friendMessage(`-${friendName}: Yeh, maybe we need to bargain. Let's try!`)
    
    narrativeMessage(`\nThey walk down to the village, approach to the nearest farm and bargain to its owner.\n`)
    let narrativeChoice = readLine.question(`-${friendName}: We offer you 22 gold for each horse, do you accept, farmer? (Y/N)\n-Farmer: `)
    if (PlayerSaidYes(narrativeChoice))
    {
        npcMessage(`-Farmer: I will let you take 2 of my horses, but not the better ones.`)
        npcMessage(`-Farmer: If you don't need them when you come back, i'll pay you 25 gold for each of them.`)
        mainCharMessage(`-${elfName}: Thank you, farmer. We will come back to you in a few days.`)
        
        narrativeMessage(`\nThey reach their destination at next day, just in time for find their friends alive.`)
        narrativeMessage(`Our story ends here, where the adventurers are happily together.`)
    }
    else
    {
        npcMessage(`-Farmer: I will not take your dirty gold, forasters. Go away!`)
        mainCharMessage(`-${elfName}: Don't be rude, we will not bother you again.`)
        
        narrativeMessage(`\nFew days later, they reach their destination, just to find the corpses of their friends.`)
        narrativeMessage(`Our story ends here, a sadly moment for the adventurers.`)
    }
}
else
{
    friendMessage(`-${friendName}: We don't have any money, friend, and... maybe is too late for keep trying to find them.`)
    mainCharMessage(`-${elfName}: Yeh, both can feel death is approaching. At this point, better to come back.`)
    
    narrativeMessage(`\nThus is how our story ends...`)
}




//-------------------
function narrativeMessage(message)
{
    console.log(message)
}

function friendMessage(message)
{
    console.log(message)
}

function mainCharMessage(message)
{
    console.log(message)
}

function npcMessage(message)
{
    console.log(message)
}

function PlayerSaidYes(narrativeChoice)
{
    return narrativeChoice=="Y"
}