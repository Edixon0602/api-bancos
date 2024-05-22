import express from 'express'
import Codes from '../Codes.mjs'
const indexRouter = express.Router()

/* GET home page. */
indexRouter.get('/all', function(req, res, next) {
  res.send(Codes)
});

indexRouter.get('/bank/:code', function(req, res, next) {
  const bank = Codes.find(bank => bank.code === req.params.code)
  res.send(bank)
})

export default indexRouter
