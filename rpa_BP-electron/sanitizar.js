
const sanitizar = {
    url: (variavel)=>{
        const variavelVirgulas = variavel.replace(/,/gi, "");
        const variavelChavesEsq = variavelVirgulas.replace(/\[/gi, "");
        const variavelChavesDir = variavelChavesEsq.replace(/\]/gi, "");
        const variavelAspas = variavelChavesDir.replace(/"/gi, "");

        return variavelAspas
    },
    relatorio: (varelatorio) => {
        const varRelatorioSanitizado = sanitizar.url(varelatorio);
        const varRelatorioSanitizadoFinal = varRelatorioSanitizado.replace(/\//gi, "-");
        return varRelatorioSanitizadoFinal
     }
}

module.exports = sanitizar;