import historicalList from '../data/historical.json' assert {type:'json' };
const historicalArray = historicalList.historicalStockList
export const getEntries = ()=> historicalArray;
export const getHistoricalBySymbol = (symbolId)=> historicalArray.find(historical=>historical.symbol === symbolId);

    
    