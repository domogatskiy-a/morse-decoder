const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letter = '';
    return expr
        .split('')
        .map((a, i, arr) => i % 2 !== 0? false : a + arr[i+1])
        .filter(a => a)
        .map(a => {
            switch (a) {
                case '00': return false;
                case '01': return false;
                case '10': return '.';
                case '11': return '-';
                case '**': return ' ';
            }
        })
        .map((a, i) => {
            if (!(i % 5)){
                letter = '';
            };
            letter += a ? a : ''; 
            if (!((i + 1) % 5)){
                return letter == '     ' ? ' ' : MORSE_TABLE[letter];
            }
        })
        .filter(a => a)
        .join('');
        
    //return expr;
}

module.exports = {
    decode
}

//console.log(module.exports.decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));