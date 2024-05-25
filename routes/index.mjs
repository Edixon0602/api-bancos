import express from 'express'
import Codes from '../Codes.mjs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const indexRouter = express.Router()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  const filePath = path.join(__dirname, '../public', 'home.html')
  res.sendFile(filePath)
});

/* GET all */
indexRouter.get('/all', function(req, res, next) {
  res.send(Codes)
});

indexRouter.get('/bank/:code', function(req, res, next) {
  const bank = Codes.find(bank => bank.code === req.params.code)
  if (!bank) return res.status(404).send({'error': 'bank not found'})
  res.send(bank)
})

export default indexRouter
