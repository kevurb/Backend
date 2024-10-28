import symbolsList from '../data/symbols.json' assert { type: 'json' };
const symbolsArray = symbolsList.symbolsList
export const getEntries = ()=> symbolsArray;
export const getSymbolById = (symbol)=> symbolsArray.find(symbols=>symbols.symbol === symbol)
