# Explicação da lógica de descriptografia

A mensagem foi criptografada com duas mudanças em cada byte (cada bloco de 8 bits):

1. Os últimos 2 bits de cada byte foram invertidos.
   - Isso significa que `00` virou `11`, `01` virou `10`, `10` virou `01` e `11` virou `00`.

2. Os 4 bits da esquerda foram trocados com os 4 bits da direita.
   - Por exemplo, `abcd efgh` se transforma em `efgh abcd`.

## Como o código resolve

- Primeiro ele converte cada linha binária em um número inteiro.
- Depois desfaz os últimos 2 bits invertidos usando uma operação XOR com `3` (`0b11`).
- Em seguida, troca os dois grupos de 4 bits do byte.
- Por fim, converte o byte resultante em caractere ASCII.

## Resultado

Quando todas as linhas são descriptografadas e juntadas, a mensagem final é:

`YOU ARE AWESOME`

Essa é a prova de que a lógica funcionou corretamente, porque a saída ficou legível e em inglês.
