//https://www.npmjs.com/package/inquirer

const inquirer = require('inquirer');

const urlAlvo = "https://www.buscape.com.br/pc-computador/";

function sanitizar(variavel) {
    const variavelVirgulas = variavel.replace(/,/gi, "");
    const variavelChavesEsq = variavelVirgulas.replace(/\[/gi, "");
    const variavelChavesDir = variavelChavesEsq.replace(/\]/gi, "");
    const variavelAspas = variavelChavesDir.replace(/"/gi, "");

    return variavelAspas


};

inquirer
    .prompt([
        {
            type: 'checkbox',
            message: 'Selecione os itens de busca:',
            name: 'consultapc',
            choices: [
                new inquirer.Separator(' = Processador = '),
                {
                    name: 'i7',
                    value:'processador-intel-core-i7/',
                },
                {
                    name: 'i5',
                    value: 'processador-intel-core-i5/',
                },
                new inquirer.Separator(' = Sistema operacional = '),
                {
                    name: 'Windows10',
                    value: 'windows-10/',
                },
                {
                    name: 'Linux',
                    value: 'sistema-operacional-linux/',
                },
                
            ],
            validate(answer) {
                if (answer.length < 1) {
                    return 'Voce deve escolher pelo menos um!';
                }

                return true;
            },
        },
    ])
    .then((answers) => {
        //console.log(JSON.stringify(answers, null, '  '));
        //console.log(JSON.stringify(answers));
        //console.log(answers);
        const urlString = JSON.stringify(answers.consultapc)
        const urlFuncional = sanitizar(urlString)
        console.log(urlAlvo + urlFuncional)
        //console.log(urlAlvo + urlFuncional.replace(/,/gi, ""));
    });

    