const dealerRepository = require('../repository/dealerRepository.js')

exports.save = function(dealer) {
    return dealerRepository.save(dealer)
}

exports.login = function(email,password) {
  return dealerRepository.findByEmail(email).then(r => {
        if(r.email == email && r.password == password){
            return Promise.resolve(200)
        }
        else{
            return Promise.resolve(401)
        }
    })
}