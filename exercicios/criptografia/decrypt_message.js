const encrypted = [
  '10010110',
  '11110111',
  '01010110',
  '00000001',
  '00010111',
  '00100110',
  '01010111',
  '00000001',
  '00010111',
  '01110110',
  '01010111',
  '00110110',
  '11110111',
  '11010111',
  '01010111',
  '00000011'
];

// Inverte os dois últimos bits de um byte inteiro.
function invertLastTwoBits(byte) {
  return byte ^ 0b11;
}

// Troca os dois grupos de 4 bits (nibbles) de um byte.
function swapNibbles(byte) {
  return ((byte & 0x0f) << 4) | ((byte & 0xf0) >> 4);
}

// Converte a string binária em caractere ASCII após desfazer a criptografia.
function decrypt(bits) {
  const byte = parseInt(bits, 2);
  const restoredLastTwo = invertLastTwoBits(byte);
  const original = swapNibbles(restoredLastTwo);
  return String.fromCharCode(original);
}

// Aplica a função de descriptografia em cada byte e junta os caracteres em uma única string.
const message = encrypted.map(decrypt).join('');

// Imprime a mensagem descriptografada no console.
console.log(message);
