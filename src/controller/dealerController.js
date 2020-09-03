const express = require("express");
const router = express.Router();
const dealerService = require('../service/dealerService');
const authService =  require('../service/authService.js')
const request = require('request');

router.get('/authenticate', authService.authenticate);

router.post('/dealer', authService.isAuthenticated, async (req, res) => {
  dealerService.save(req.body)
            .then(r => {
                res.status(201)
                res.json(r)
            })
            .catch(e => {
                res.status((e.status ? e.status : 500))
                res.json({status: (e.status ? e.status : 500), message: e.message})
            })
})

router.get('/dealer/login', authService.isAuthenticated, async (req, res) => {
  const email = req.query.email
  const password = req.query.password

  dealerService.login(email,password)
            .then(r => {
              res.status(r)
              res.json({status: r})
            })
            .catch(e => {
                res.status((e.status ? e.status : 500))
                res.json({status: (e.status ? e.status : 500), message: e.message})
            })
})

router.get('/dealer/cashback', authService.isAuthenticated, async (req, res) => {
  try {
    const cpf = req.query.cpf.replace(".","").replace("-","");
    var options = {
      method: 'GET',
      url: 'https://mdaqk8ek5j.execute-api.us-east-1.amazonaws.com/v1/cashback?cpf=' +  cpf,
      headers: {
        'token': 'ZXPURQOARHiMc6Y0flhRC1LVlZQVFRnm',
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      var result = JSON.parse(body);
      return res.json(result.body);
      });    
    } catch (err) {
    console.log(err)
    return res.status(500)
  }
}) 

module.exports = app => app.use("/boticario", router);