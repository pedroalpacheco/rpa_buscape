
function sanitizar(variavel) {
    if (variavel) {
        const variavelVirgulas = variavel.replace(/,/gi, "");
        const variavelChavesEsq = variavelVirgulas.replace(/\[/gi, "");
        const variavelChavesDir = variavelChavesEsq.replace(/\]/gi, "");
        const variavelAspas = variavelChavesDir.replace(/"/gi, "");
    
        return variavelAspas

    } else {
        return vazio
      }


};

module.exports = sanitizar;