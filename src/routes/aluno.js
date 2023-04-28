const alunoController = require('../controllers/aluno')

module.exports = (app) => {
    app.get('/aluno/:name', alunoController.getAluno
    /*
    #swagger.tags = ['Alunos']   
    #swagger.summary = 'Consulta todos alunos'       
    #swagger.parameters['name'] = {
        description: "Nome do aluno cadastrado",
        value: "Douglas"
      }
    #swagger.responses[200] = { description: 'Sucesso!',
    schema: {
        "total": 1,
        "microservice": [
          {
            "API_ID": 1,
            "API_NOME": "api-dtm",
            "API_VERSAO": "1.0.20",
            "API_DESCRICAO": "API para trabalhar com DTM",
            "API_GIT_URL": "...bit.com.br",
            "API_PORTA": 3000,
            "API_VINCULOS": 1
          }
        ]
      }
    }
    */)
    app.get('/alunos', alunoController.getAlunos)
    app.post('/aluno', alunoController.postAluno
    // #swagger.tags = ['Alunos']   
    // #swagger.summary = 'Cadastro de alunos'
    // #swagger.description = 'Cadastro de alunos do sistema da horus'

    /* #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados para inserir um aluno',
        required: 'true',
        type: 'json',
        schema: {
            "id": 5,
            "nome": "Douglas",
            "sobrenome": "Eduardo",
            "periodo": 5,
            "observacao": "teste"
        }
    } */
    )
    app.delete('/aluno/:id', alunoController.deleteAlunos)
    app.delete('/aluno/:id', alunoController.putAluno)
    app.delete('/aluno/:id', alunoController.patchAluno)
}