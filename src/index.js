const elvenSheildRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
}
const elvenGauntletsRecipe = {
    ...elvenSheildRecipe,
    leather: 1,
    refinedMoonstone: 4,
}

console.log(elvenSheildRecipe);
console.log(elvenGauntletsRecipe);