import express from "express";
import { getEntries, getSymbolById } from "../services/symbols.js"; 
const router = express.Router()
router.get('/', (req,res)=>{
    const allEntries = getEntries()
    res.send(allEntries)
})
router.get('/:symbolId', (req,res)=>{
    const {symbolId} = req.params
    const symbolRes = getSymbolById(symbolId)
    return (symbolRes ==! []) ? res.sendStatus(404):res.send(symbolRes) 
})
export default router