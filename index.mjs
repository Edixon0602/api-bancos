import express from 'express'
import indexRouter from './routes/index.mjs'
import cors from 'cors'
const app = express()
const port = process.env.port || 3000

app.use(express.static('public'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('', indexRouter);

app.listen(port, () => console.log('Listening on port 3000'));

export default app
