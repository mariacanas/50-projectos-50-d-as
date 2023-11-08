

const btnCopy = document.getElementById('copy');
const resultPassword = document.getElementById('result');

const lengthPassword = document.getElementById('length');
const upperCasePassword = document.getElementById('uppercase');
const lowerCasePassword = document.getElementById('lowercase');
const numbersPassword = document.getElementById('numbers');
const symbolsPassword = document.getElementById('symbols');

const btnGeneratePassword = document.getElementById('generatePassword');


btnCopy.addEventListener('click', () => {
    const resultPass = resultPassword.innerText;
    
    navigator.clipboard.writeText(resultPass);
    alert("Password copied to clipboard!");

})


btnGeneratePassword.addEventListener('click', () =>{
    const lengthPass = lengthPassword.value;
    const hasUpper = upperCasePassword.checked;
    const hasLower = lowerCasePassword.checked;
    const hasNumbers = numbersPassword.checked;
    const hasSymbols = symbolsPassword.checked;

    resultPassword.innerText = generatePassword(lengthPass,hasLower,hasNumbers,hasSymbols,hasUpper);
});

function generatePassword(length,upper,lower,numbers,symbols){
    let generatedPassword = '';

    let charset = '';
    if (upper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*(){}[]=<>/,.';

    const numberSetting = upper + lower + numbers + symbols;
    
    if(numberSetting == 0){
        return '';
    }
    else{
        for(let i = 0; i < length; i++){
            const randomIdx = Math.floor(Math.random()* charset.length);
            generatedPassword
             += charset[randomIdx];
        }
        return generatedPassword;
    }
}



