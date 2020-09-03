const express = require("express");
const router = express.Router();
const acquisitionService = require('../service/acquisitionService');
const authService =  require('../service/authService.js')

router.post('/acquisition', authService.isAuthenticated, async (req, res) => {
    acquisitionService.save(req.body)
              .then(r => {
                  res.status(201)
                  res.json(r)
              })
              .catch(e => {
                  res.status((e.status ? e.status : 500))
                  res.json({status: (e.status ? e.status : 500), message: e.message})
              })
}) 

router.get('/acquisition', authService.isAuthenticated, async (req, res) => {
  acquisitionService.findAll()
            .then(r => {
                res.status(200)
                res.json(r)
            })
            .catch(e => {
                res.status((e.status ? e.status : 500))
                res.json({status: (e.status ? e.status : 500), message: e.message})
            })
})

module.exports = app => app.use("/boticario", router);