import express from 'express'
import symbols from './router/symbols.js'
import historical from './router/historical.js'
import morgan from 'morgan';
import cors from 'cors'
//inizialitation
const app =  express();
//config 
const PORT = process.env.PORT || 3000;
app.set('PORT',PORT)
//midwares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
//home page
app.get('/api/',(req,res)=>{
    () => console.log("API Rest GBS")
    res.send('API REST GSB By Kevin Urbina')
})
//router 
app.use('/api/historical', historical)
app.use('/api/symbols', symbols)
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})