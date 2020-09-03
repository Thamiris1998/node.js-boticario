const dealerModel = require('../model/dealer');

exports.save = async (dealer) => {
    try {
        const findResponse = await dealerModel.find({cpf: dealer.cpf})
        if (findResponse.length === 0) {
            const result = dealerModel.create(dealer)
            console.log(`Revendedor salvo com sucesso: ${result}`)        
            return result
        }
        return findResponse
    } catch(e) {
        throw new Error('Erro ao salvar revendedor')
    }
}

exports.findById = async (id) => {
    try {
        const result = await dealerModel.findOne({_id: id})
        if (result === null) {
            throw new Error('Revendedor não encontrado')
        }
        console.log(`Revendedor encontrado por ID: ${result._id}`)        
        return Promise.resolve(result)
    } catch(e) {
            console.error(`Erro ao buscar por id: ${id}`, e)
            throw new Error('Erro ao buscar por Id')
    }
}

exports.findByEmail = async (email) => {
    try {
        
        const result = await dealerModel.findOne({email: email})
        if (result === null) {
            throw new Error('Revendedor não encontrado')
        }
        console.log(`Revendedor encontrado por e-mail: ${result.email}`)        
        return Promise.resolve(result)
    } catch(e) {
            console.error(`Erro ao buscar por id: ${id}`, e)
            throw new Error('Erro ao buscar por Id')
    }
}