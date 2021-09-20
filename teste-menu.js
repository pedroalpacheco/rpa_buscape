const inquirer = require('inquirer');
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
        console.log(answers);
    });