import express from 'express'
import indexRouter from './routes/index.mjs'
const app = express()
const port = process.env.port || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(port, () => console.log('Listening on port 3000'));

export default app
