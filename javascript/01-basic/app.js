function passwordgen(passwordlantgh) {
    let char = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbn!@#$%^&*(){}[]"
    let password = " ";
    
    for (let i = 0; i < passwordlantgh; i++) {
        let randompass = Math.floor(Math.random() * char.length)
        password += char.charAt(randompass)
        // anathor type
        // password += char[randompass]
        
    }
    return password;
}
let password = passwordgen(12)
console.log(password);

