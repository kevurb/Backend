import express from "express";
import {getEntries, getHistoricalBySymbol }from "../services/historical.js"
const router = express.Router()
router.get('/', (req,res)=>{
    const allEntries = getEntries()
    res.send(allEntries)
})
router.get('/:symbolId', (req,res)=>{
    const {symbolId} = req.params
    const historicalResult = getHistoricalBySymbol(symbolId)
    return (historicalResult ==! [])?res.sendStatus(404):res.send(historicalResult)
})
export default router