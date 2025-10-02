function caesarCipher(s, k) {
    const shift = k % 26; 
    let result = "";

    for (let char of s) {
        if (char >= "a" && char <= "z") {
          let code = (char.charCodeAt(0) - 97 + shift) % 26 + 97;
            result += String.fromCharCode(code);
        } else if (char >= "A" && char <= "Z") {
           
            let code = (char.charCodeAt(0) - 65 + shift) % 26 + 65;
            result += String.fromCharCode(code);
        } else {
           
            result += char;
        }
    }

    return result;
}
