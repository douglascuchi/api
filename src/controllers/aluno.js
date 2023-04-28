const alunoService = require('../services/aluno')

const getAluno = async (req, res, next) => {
    try {
        const retorno = await alunoService.getAluno(req.params)
        res.status(201).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const postAluno = async (req, res, next) => {
    try {
        await alunoService.postAluno(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err.message))
    } catch (err){
        next(err)
    }
}

const deleteAlunos = async (req, res, next) => {
    try {
        await alunoService.deleteAlunos(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch {
        next(err);
    }
}

const putAluno = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await alunoService.putAluno(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next (err)
    }
}

const patchAluno = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await alunoService.patchAluno(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next (err)
    }
}

const getAlunos = async (req, res, next) => {
    try {
        await alunoService.getAlunos()
        .then (ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports.deleteAlunos = deleteAlunos
module.exports.postAluno = postAluno
module.exports.getAluno = getAluno
module.exports.getAlunos = getAlunos
module.exports.putAluno = putAluno
module.exports.patchAluno = patchAluno
