function hitung() {
    var operand1 = parseFloat(document.getElementById('operand1').value);
    var operand2 = parseFloat(document.getElementById('operand2').value);
    var operator = document.getElementById('operator').value;
    var result;

    switch(operator) {
        case 'tambah':
            result = operand1 + operand2;
            break;
        case 'kurang':
            result = operand1 - operand2;
            break;
        case 'kali':
            result = operand1 * operand2;
            break;
        case 'bagi':
            if(operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                result = "Tidak bisa dibagi oleh nol!";
            }
            break;
        case 'modulus':
            result = operand1 % operand2;
            break;
        default:
            result = "Operasi tidak valid!";
    }

    document.getElementById('result').innerText = "Hasil: " + result;
}
