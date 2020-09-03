const dealerRepository = require('../repository/dealerRepository.js')
const acquisitionModel = require('../model/acquisition');

exports.save = async (acquisition) => {
    try {
        const dealer = await dealerRepository.findById(acquisition.dealerId)
        if (dealer != null) {
            acquisition.status = verifyStatus(dealer.cpf)
            const acquisitionSaved = acquisitionModel.create(acquisition)
            console.log(`Venda criada com sucesso: ${acquisitionSaved}`)
            return acquisitionSaved
        } else{
            throw new Error('O dealerId informado não foi encontrado')
        }
    } catch(e) {
        throw new Error('Erro ao salvar compra')
    }
}

exports.findAll = async() => {
  const acquisitionFound = acquisitionModel.find({}, function(err, docs) { 
    if (!err){ 
    console.log(`Vendas encontradas: ${docs}`);     
    } else {throw err;} });  
  return acquisitionFound
}

function verifyStatus(cpf) {
    if(cpf.replace(".","").replace("-","") == "15350946056"){
       return "Aprovado"
    } else{
        return "Em validação"
    }
}
