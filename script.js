function convertToRoman(num) {
    if (num === 0) {
        return ''; //
    }
    const obj = {
        0: ['M', 1000],
        1: ['CM', 900],
        2: ['D', 500],
        3: ['CD', 400],
        4: ['C', 100],
        5: ['XC', 90],
        6: ['L', 50],
        7: ['XL', 40],
        8: ['X', 10],
        9: ['IX', 9],
        10: ['V', 5],
        11: ['IV', 4],
        12: ['I', 1]
    };
    let roman = '';
    for (let key in obj) {
        const [symbol, value] = obj[key];
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }
    return roman;
}