const acquisitionRepository = require('../repository/acquisitionRepository.js')

exports.save = function(acquistion) {
    acquistion.cashback = verifyCashback(acquistion.price)
    acquistion.percentageCashback = verifyPercentageCashback(acquistion.price)
    return acquisitionRepository.save(acquistion)
} 

exports.findAll = function(){
    return acquisitionRepository.findAll()
}

function verifyCashback(price) {
    if (price  < 1000) {
        return price * 0.10
    } else if(price  >= 1000 && price  <= 1500) {
        return price * 0.15
    }else{
        return price * 0.20
    }
}

function verifyPercentageCashback(price){
    if (price  < 1000) {
        return "10%"
    } else if(price  >= 1000 && price  <= 1500) {
        return "15%"
    }else{
        return "20%"
    }
}
