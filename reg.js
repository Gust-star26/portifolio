let tentativas = 0;
let acertos = false;
while ( !acertos && tentativas < 3) {
    tentativas++;
    console.log(`Tentativas: ${tentativas}`);
        if (tentativas ===2) acertos=true
    
}
console.log('fim do processo')