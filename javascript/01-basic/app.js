function passwordgen() {
    let char = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbn!@#$%^&*(){}[]"
    let password = " ";
    let passwordlantgh = 12
    
    for (let i = 0; i < passwordlantgh; i++) {
        let randompass = Math.floor(Math.random() * char.length)
        password += char.charAt(randompass)
        // anathor type
        // password += char[randompass]
        document.querySelector('h3').innerHTML = password
        
    }
    return password;
}


