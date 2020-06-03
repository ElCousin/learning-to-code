//The array topics is pending 😭
let fruits = ["Apple","Raspaberries","Guaba","Papaya"]


//Normal for
let howManyFruits = fruits.length; //<- 4
for(let fruitIndex=0;fruitIndex<howManyFruits;fruitIndex++)
{
    const fruit = fruits[fruitIndex]; 
    console.log(`La siguiente fruta es: ${fruit}`);
}

//For each

for(var fruit in fruits)
{
    console.log(`La siguiente fruta es: ${fruit}`);
}

//Using the foreach method inside an array
fruits.forEach(fruit =>
{
    console.log(`La siguiente fruta es: ${fruit}`);
});

