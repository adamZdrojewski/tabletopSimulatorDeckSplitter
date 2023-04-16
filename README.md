# Tabletop Simulator Deck Splitter
A simple Node.js CLI tool to split a deck image back into it's original card files

## Installation
1. Install Node.js/NPM
2. Install dependencies with NPM
```bash
npm install
```

## Usage
Replace filename with your deck image file name and the cardsAcross/cardsDown with how the cards are arranged in the deck image
```bash
node deckSplitter --file "filename.png" --cardsAcross 10 --cardsDown 3
```
Card images will be generated in `/cards` folder

### Extra Tip
Make sure there is no extra space in the original deck image.  Make sure the entire image is used up by the cards.