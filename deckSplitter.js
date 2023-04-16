const jimp = require("jimp");
const minimist = require("minimist");

const {file, cardsAcross, cardsDown} = minimist(process.argv);

if(file === undefined || cardsAcross === undefined || cardsDown === undefined) {
    console.error("Please make sure to include 'file', 'cardsAcross' and 'cardsDown' flags!");
    process.exit();
}

crop(file, cardsAcross, cardsDown, () => {
    console.log("all done!");
});

async function crop(fileName, cardsAcross, cardsDown, callback) {
    const img = await jimp.read(fileName);

    let totalWidth = img.bitmap.width;
    let totalHeight = img.bitmap.height;
    
    let cardWidth = totalWidth/cardsAcross;
    let cardHeight = totalHeight/cardsDown;
    cardWidth = Math.floor(cardWidth);
    cardHeight = Math.floor(cardHeight);

    let cardNum = 1;
    for(var y = 0; y < cardsDown; y++) {
        for(var x = 0; x < cardsAcross; x++) {
            var tempImg = await jimp.read(fileName);
            tempImg.crop((x*cardWidth), (y*cardHeight), cardWidth, cardHeight).write(`./cards/${cardNum}.png`);
            cardNum++;
        }
    }
    callback();
}